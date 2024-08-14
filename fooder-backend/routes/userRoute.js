const express = require("express");
const userRouter = express.Router()
const verifyToken = require("../middleware/authMiddleware")

const { register, login } = require('../controllers/authController')


userRouter.post("/register", register);
userRouter.post("/login", login);

module.exports = userRouter
