const express = require('express')
const multer = require('multer')
const { addProduct } = require('../controllers/productController')
const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/add', upload.single('image'), addProduct)

module.exports = router