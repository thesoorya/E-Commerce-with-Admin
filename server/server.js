const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const connectDB = require("./config/db")
const PORT = process.env.PORT || 5000

// db connection
connectDB()

// middleware
app.use(express.json())
app.use(cors())

// server
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})