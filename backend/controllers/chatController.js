const catchAsync = require("../middlewares/catchAsync");
const Chat = require("../models/chatModel");

// Create a new chat
exports.newChat = catchAsync(async (req, res, next) => {
  const { receiverId } = req.body;
  const { _id } = req.user;

  const chatExists = await Chat.findOne({
    users: {
      $all: [_id, receiverId],
    },
  });

  if (chatExists) {
    return res.status(200).json({
      success: true,
      newChat: chatExists,
    });
  }

  const newChat = await Chat.create({
    users: [_id, receiverId],
  });

  res.status(200).json({
    success: true,
    newChat,
  });
});

// Get All Chats
exports.getChats = catchAsync(async (req, res, next) => {
  const { _id } = req.user;

  const chats = await Chat.find({
    users: {
      $in: [_id],
    },
  })
    .sort({
      updatedAt: -1,
    })
    .populate("users latestMessage");

  res.status(200).json({
    success: true,
    chats,
  });
});
