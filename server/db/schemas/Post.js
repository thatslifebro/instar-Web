const { Schema } = require("mongoose");

module.exports = new Schema({
  user: {
    type: String,
    default: "user",
    requried: true,
  },
  profileImage: {
    type: String,
  },
  content: {
    type: String,
    required: true,
    default: "내용이 없습니다.",
  },
});
