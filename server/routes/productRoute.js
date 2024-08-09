const express = require("express");
const multer = require("multer");
const {
  addProduct,
  listProduct,
  deleteProduct,
} = require("../controllers/productController");
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/add", upload.single("image"), addProduct);
router.get("/list", listProduct);
router.delete("/remove/:id", deleteProduct);

module.exports = router;
