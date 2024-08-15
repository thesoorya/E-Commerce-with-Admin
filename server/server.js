const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const cartRoute = require("./routes/cartRoute");
const PORT = process.env.PORT || 5000;

// db connection
connectDB();

// middleware
app.use(express.json());
app.use(cors());

// api endpoints
app.use("/api/product", productRoute);
app.use("/api/auth", userRoute);
app.use("/api/cart", cartRoute);
app.use("/images", express.static("uploads"));

// server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
