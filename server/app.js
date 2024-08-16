const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const port = 5000

const productRouter = require('./routes/productRoutes')

const allowedOrigins = [
  'http://localhost:5173',
  'https://interiormart-ecom.onrender.com',
  'https://interiormart-ecom-admin.onrender.com'
];

app.use((req, res, next) => {
  const origin = req.headers.origin; // Get the Origin header from the request

  if (allowedOrigins.includes(origin)) {
      // If the origin is in the allowed list, set the Access-Control-Allow-Origin header
      res.setHeader('Access-Control-Allow-Origin', origin);
  }

  // Set other CORS headers
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  next(); // Proceed to the next middleware or route handler
});
// app.use(cors());
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