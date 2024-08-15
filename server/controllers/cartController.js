const User = require('../models/userModel');

exports.addToCart = async (req, res) => {
  try {
    // Find user by ID
    let userData = await User.findById(req.body.userId);
    
    if (!userData) {
      return res.status(400).json({
        success: false,
        message: "User not found",
      });
    }

    // Access user's cart data
    let cartData = userData.cartData || {}; // Initialize cartData if undefined

    // Check if item exists in the cart, else add it with quantity 1
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }

    // Update user with new cart data
    await User.findByIdAndUpdate(req.body.userId, { cartData });

    // Return success response
    res.status(200).json({
      success: true,
      message: "Added to cart",
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: "Failed to add to cart",
    });
  }
};

exports.removeFromCart = async (req, res) => {

};

exports.getCart = async (req, res) => {
  
};
