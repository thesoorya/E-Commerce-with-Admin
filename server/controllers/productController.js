const Product = require("../models/productModel");
const fs = require("fs");

exports.addProduct = async (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file.filename;

  try {
    const product = new Product({
      name,
      description,
      price,
      category,
      image,
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error adding product",
    });
  }
};

exports.listProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Error",
    });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    fs.unlink(`uploads/${product.image}`, () => {});

    await Product.findByIdAndDelete(req.body.id);

    res.status(200).json({
      success: true,
      message: "product deleted",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      success: false,
      message: "Error",
    });
  }
};
