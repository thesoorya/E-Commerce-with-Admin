const Product = require('../models/productModel')

exports.addProduct = async (req, res) => {
    const { name, description, price, category } = req.body
    const image = req.file.filename

    try {
        const product = new Product({
            name,
            description,
            price,
            category,
            image,
        })

        await product.save()

        res.status(201).json({
            success: true,
            message: 'Product added successfully',
            product,
        })
    } catch (err) {
        console.error(err)
        res.status(400).json({
            success: false,
            message: 'Error adding product',
        })
    }
}