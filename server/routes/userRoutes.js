const express = require("express");
const userRouter = express.Router()

const { signup, login,  getAllUsers, getUserById } = require('../controllers/userController')


userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/signup", signup);
userRouter.post("/login", login);

module.exports = userRouter
