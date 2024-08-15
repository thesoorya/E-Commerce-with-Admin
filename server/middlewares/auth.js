const jwt = require('jsonwebtoken');

// Middleware to authenticate user based on token
exports.authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization'); // Extract token from Authorization header

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Not authorized",
    });
  }

  try {
    // Verify token
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user ID to request body
    req.body.userId = token_decode.id;

    // Proceed to the next middleware or controller
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Token verification failed",
    });
  }
};
