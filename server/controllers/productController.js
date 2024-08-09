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
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "No ID provided" });
    }
    const product = await Product.findById(id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    if (product.image) {
      fs.unlink(`uploads/${product.image}`, (err) => {
        if (err) {
          console.error("Error removing image file:", err);
        }
      });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(400).json({
      success: false,
      message: "Error deleting product",
    });
  }
};
