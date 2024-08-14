const express = require("express");
const postRouter = express.Router()


const {
  addPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} = require("../controllers/postController")


postRouter.get("/", getAllPosts);
postRouter.get("/:id", getPostById);
postRouter.post("/", addPost);
postRouter.put("/:id", updatePost);
postRouter.delete("/:id", deletePost);

module.exports = postRouter
