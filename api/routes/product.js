const router = require("express").Router()
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken")
const Product = require("../models/Product")

// Create
router.post("/", verifyTokenAndAdmin, async (req, res, next) => {
  const newProduct = new Product(req.body)
  try {
    const savedProduct = await newProduct.save()
    res.status(200).json(savedProduct)
  } catch (err) {
    next(err)
  }
})

// Update
router.put(
  "/update/:id",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedProduct)
    } catch (err) {
      next(err)
    }
  }
)

// Delete
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res.status(200).json("Product deleted.")
  } catch (err) {
    next(err)
  }
})

// Get Product
router.get("/find/:id", async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json(product)
  } catch (err) {
    next(err)
  }
})

// Get All Products
router.get("/all", async (req, res, next) => {
  const queryNew = req.query.new
  const queryCategory = req.query.category
  try {
    let products
    if (queryNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (queryCategory) {
      products = await Product.find({ categories: { $in: [queryCategory] } })
    } else {
      products = await Product.find()
    }
    res.status(200).json(products)
  } catch (err) {
    next(err)
  }
})

module.exports = router
