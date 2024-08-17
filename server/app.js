const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
// const PORT = process.env.PORT || 10000

const productRouter = require('./routes/productRoutes')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/product", productRouter)

const connect = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};


app.listen(5050, () => {
  console.log(`server listening at 5050`);
  connect();
});