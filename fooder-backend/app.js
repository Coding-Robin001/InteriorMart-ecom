const express = require("express") ;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors")
const app = express();
dotenv.config()

const productRouter = require("./routes/productRoute")
const userRouter = require("./routes/userRoute")
const uploadController = require("./controllers/uploadController")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(express.json())


app.use("/api/user", userRouter)
app.use("/api/product", productRouter)
app.use("/upload", uploadController)



const connect = async () => {
  try {
    mongoose.set('strictQuery', false)
    mongoose.connect(process.env.MONGO);
    console.log('connected to mongodb!');
  } catch (error) {
    throw error;
  }
};

app.listen(8000, () => {
  console.log("server listening at port8000");
  connect();
});
