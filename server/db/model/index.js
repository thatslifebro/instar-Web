const mongoose = require("mongoose");
const Post = require("../schemas/Post");

exports.Post = mongoose.model("Post", Post);
