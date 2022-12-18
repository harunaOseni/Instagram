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

// Logout User
exports.logoutUser = catchAsync(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out",
  });
});

// Get User Details --Logged In User
exports.getAccountDetails = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate({
    path: "posts",
    populate: {
      path: "postedBy",
    },
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Get User Details
exports.getUserDetails = catchAsync(async (req, res, next) => {
  const user = await User.findOne({
    username: req.params.username,
  })
    .populate("followers following")
    .populate({
      path: "posts",
      populate: {
        path: "comments",
        populate: {
          path: "user",
        },
      },
    })
    .populate({
      path: "posts",
      populate: {
        path: "postedBy",
      },
    })
    .populate({
      path: "saved",
      populate: {
        path: "comments",
        populate: {
          path: "user",
        },
      },
    })
    .populate({
      path: "saved",
      populate: {
        path: "postedBy",
      },
    });

  res.status(200).json({
    success: true,
    user,
  });
});

// Get User Details By Id
exports.getUserDetailsById = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Get All Users
exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();

  const suggestedUsers = users
    .filter(
      (user) =>
        !user.followers.includes(req.user._id) &&
        user._id.toString() !== req.user._id.toString()
    )
    .slice(0, 5)
    .reverse();

  res.status(200).json({
    success: true,
    users: suggestedUsers,
  });
});

// Update Password
exports.updatePassword = catchAsync(async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;

  const user = await User.findById(req.user._id).select("+password");

  const isPasswordMatched = await user.comparePassword(oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password doesn't match", 401));
  }

  user.password = newPassword;
  await user.save();
  sendCookie(user, 201, res);
});

// Update Profile
exports.updateProfile = catchAsync(async (req, res, next) => {
  const { name, username, bio, website, email, avatar } = req.body;

  const newUserData = {
    name,
    username,
    website,
    bio,
    email,
  };

  const userExists = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (userExists && userExists._id.toString() !== req.user._id.toString()) {
    return next(new ErrorHandler("User Already Exists", 404));
  }

  if (avatar !== "") {
    const user = await User.findById(req.user._id);

    await deleteFile("/profiles", user.avatar);
    newUserData.avatar = req.file.filename;
  }

  await User.findByIdAndUpdate(req.user._id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });

  res.status(200).json({
    success: true,
  });
});

// Delete Profile
exports.deleteProfile = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id);
  const posts = user.posts;
  const followers = user.followers;
  const following = user.following;
  const userId = user._id;

  // delete post & user images

  await user.remove();

  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  for (let i = 0; i < posts.length; i++) {
    const post = await Post.findById(posts[i]);
    await post.remove();
  }

  for (let i = 0; i < followers.length; i++) {
    const follower = await User.findById(followers[i]);

    const index = follower.following.indexOf(userId);
    follower.following.splice(index, 1);
    await follower.save();
  }

  res.status(200).json({
    success: true,
    message: "Profile Deleted",
  });
});
