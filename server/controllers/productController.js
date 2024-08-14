const Product = require('../models/Product')

const addProduct = async (req, res) => {
    console.log(req.body);
    
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let lastProductArray = products.slice(-1)
        let lastProduct = lastProductArray[0];
        id = lastProduct.id + 1;
    } else{
        id = 1
    }

    const product = new Product({
        id: id,
        productName: req.body.title,
        desc: req.body.desc,
        image: req.body.image,
        category: req.body.category,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
    })

    console.log(product);
    await product.save();
    console.log("product saved");
    res.json({
        success: true,
        productName: req.body.productName
    })
};


const removeProduct = async (req, res) => {
    Product.findOneAndDelete({id: req.body.id})
    console.log(`removed ${req.body.productName}`);
    res.json({
        success: true,
        productName: req.body.productNames
    })

}

const getAllProduct = async (req, res) => {
    let products = await Product.find({});
    console.log("all products fetched!");
    res.send(products)
}


module.exports = { addProduct, removeProduct, getAllProduct };