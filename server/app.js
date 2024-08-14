const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const port = 5000

const productRouter = require('./routes/productRoutes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/product", productRouter)

app.get("/product", (req, res)=> {
  res.send("welcome to online shopping cart!")
})


const connect = async () => {
  try {
    // mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};


app.listen(port, () => {
  console.log(`server listening at ${port}`);
  connect();
});