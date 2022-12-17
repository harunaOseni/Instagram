const User = require("../models/userModel");
const Post = require("../models/postModel");
const catchAsync = require("../middlewares/catchAsync");
const sendCookie = require("../utils/sendCookie");
const ErrorHandler = require("../utils/errorHandler");
const sendEmail = require("../utils/sendEmail");
const crypto = require("crypto");
const deleteFile = require("../utils/deleteFile");

// Signup User
exports.signupUser = catchAsync(async (req, res, next) => {
  const { name, email, username, password } = req.body;

  const user = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (user) {
    if (user.username === username) {
      return next(new ErrorHandler("Username already exists", 401));
    }
    return next(new ErrorHandler("Email already exists", 401));
  }

  const newUser = await User.create({
    name,
    email,
    username,
    password,
    avatar: req.file ? req.file.filename : null,
  });

  sendCookie(newUser, 201, res);
});

// Login User
exports.loginUser = catchAsync(async (req, res, next) => {
  const { userId, password } = req.body;

  const user = await User.findOne({
    $or: [{ email: userId }, { username: userId }],
  }).select("+password");

  if (!user) {
    return next(new ErrorHandler("User doesn't exist", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Password doesn't match", 401));
  }

  sendCookie(user, 201, res);
});
