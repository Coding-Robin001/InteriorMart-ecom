const express = require("express");
const postRouter = express.Router()

const {addProduct, removeProduct, getAllProduct } = require("../controllers/productController")

postRouter.post("/add", addProduct);
postRouter.post("/remove", removeProduct)
postRouter.get("/allProduct", getAllProduct)

module.exports = postRouter
