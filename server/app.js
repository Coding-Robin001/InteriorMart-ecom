const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const port = 5000


const allowedOrigins = [
  'https://interiormart-ecom.onrender.com',
  'https://interiormart-ecom-admin.onrender.com',
  'http://localhost:5000'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
const productRouter = require('./routes/productRoutes')

// app.use(cors());
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