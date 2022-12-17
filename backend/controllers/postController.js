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
exports.likeUnlikePost = catchAsync(async (req, res, next) => {
  const { post } = await Post.findById(req.params.id);

  if (!post) {
    return next(new ErrorHandler("Post not found", 404));
  }

  if (post.likes.includes(req.user._id)) {
    const index = post.likes.indexOf(req.user._id);
    post.likes.splice(index, 1);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post unliked",
    });
  } else {
    post.likes.push(req.user._id);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post liked",
    });
  }
});
