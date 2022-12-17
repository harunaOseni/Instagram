const catchAsync = require("../middlewares/catchAsync");
const Chat = require("../models/chatModel");

// Create a new chat
exports.newChat = catchAsync(async (req, res, next) => {
  const { receiverId } = req.body;
  const { _id } = req.user;

  const chatExists = await Chat.findOne({
    users: {
        $all: [_id, receiverId],
    }
  });
});
