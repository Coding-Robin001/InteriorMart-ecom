const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 5050;

// Model
// const Product = require('./models/Product');

// Middleware setup
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req,res) => {
    res.send("connection is workin!")
})

// Add Product
app.post('/product/add', async (req, res) => {
    try {
        console.log(req.body);

        let products = await Product.find({});
        let id;
        if (products.length > 0) {
            let lastProductArray = products.slice(-1);
            let lastProduct = lastProductArray[0];
            id = lastProduct.id + 1;
        } else {
            id = 1;
        }

        const product = new Product({
            id: id,
            productName: req.body.title,
            desc: req.body.desc,
            image: req.body.image,
            category: req.body.category,
            newPrice: req.body.newPrice,
            oldPrice: req.body.oldPrice,
        });

        console.log(product);
        await product.save();
        console.log("Product saved");
        res.json({
            success: true,
            productName: req.body.title
        });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Remove Product
app.delete('/product/remove', async (req, res) => {
    try {
        await Product.findOneAndDelete({ id: req.body.id });
        console.log(`Removed ${req.body.id}`);
        res.json({
            success: true,
            productName: req.body.title
        });
    } catch (error) {
        console.error("Error removing product:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Get All Products
app.get('/product/all', async (req, res) => {
    try {
        let products = await Product.find({});
        console.log("All products fetched!");
        res.send(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
});

// Connect to MongoDB
const connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected2 to MongoDB!');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

// Start server and connect to MongoDB
app.listen(PORT, () => {
    console.log(`Server2 is listening on port ${PORT}`);
    connect();
});
