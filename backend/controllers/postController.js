const Post = require("../models/postModel");
const User = require("../models/userModel");
const catchAsync = require("../middlewares/catchAsync");
const ErrorHandler = require("../utils/errorHandler");
const deleteFile = require("../utils/deleteFile");

// Create a new post
exports.newPost = catchAsync(async (req, res, next) => {
  const { caption } = req.body;
  const { filename } = req.file;
  const { _id } = req.user;

  const post = await Post.create(postData);

  const user = await User.findById(_id);
  user.posts.push(post._id);
  await user.save();

  res.status(200).json({
    success: true,
    post,
  });
});


// Like or Unlike Post