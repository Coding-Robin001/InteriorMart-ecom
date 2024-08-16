const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const port = 5000



const productRouter = require('./routes/productRoutes')

const corsOptions = {
  origin: 'https://interiormart-ecom.onrender.com', // Allow requests from this origin
  methods: 'GET,POST,PUT,DELETE', // Allow these HTTP methods
  credentials: true, // Allow cookies to be sent
};
app.use(cors(corsOptions))
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

app.listen(port, () => {
  console.log(`server listening at ${port}`);
  connect();
});