const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    id: {
        type:Number,
        required: true,

    },
    productName: {
        type: String,
        required: true,
        // min: 4,
    },
    desc: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
        required: true,
    },
    newPrice:{
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    available:{
        type: Boolean,
        default: true
    }
})

module.exports = mongoose.model("Product", ProductSchema)