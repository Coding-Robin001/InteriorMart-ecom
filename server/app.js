const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose")
const cors = require('cors')
const jwt = require('jsonwebtoken')
const path = require('path')
const port = 5000

// const userRouter = require('./routes/userRoutes')
// const postRouter = require('./routes/postRoutes');
const productRouter = require('./routes/productRoutes')
const multer = require("multer");

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use("/user", userRouter)
// app.use("/post", postRouter)
app.use("/product", productRouter)

app.get("/product", (req, res)=> {
  res.send("welcome to online shopping cart!")
})



// app.listen(port, console.log(`server running on port ${port}!`)
// )

// start();
const connect = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};

const storage = multer.diskStorage({
  destination: './upload/images,',
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

app.use('/images', express.static('upload/images'))
app.post("/upload", upload.single('product'), (req,res) => {
  res.json({
    success: 1,
    imageUrl: `http://localhost:${port}/images/${req.file.filename}`
  })
})

app.listen(port, () => {
  console.log(`server listening at ${port}`);
  connect();
});