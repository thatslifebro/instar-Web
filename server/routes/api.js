const { Router } = require("express");
const router = Router();

const { Post } = require("../db/model");

router.post("/profile/post", async (req, res) => {
  const newPost = await Post.create(req.body);
  res.status(201).json(newPost);
  console.log("post");
});

router.get("/profile/post", async (req, res) => {
  const Posts = await Post.find({});
  res.status(201).json(Posts);
});

module.exports = router;
