const router = require("express").Router()
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken")
const Cart = require("../models/Cart")

// Create
router.post("/", async (req, res, next) => {
  const newCart = new Cart(req.body)
  try {
    const savedCart = await newCart.save()
    res.status(200).json(savedCart)
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
      const updatedCart = await Cart.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      res.status(200).json(updatedCart)
    } catch (err) {
      next(err)
    }
  }
)

// Delete
router.delete(
  "/delete/:id",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    try {
      await Cart.findByIdAndDelete(req.params.id)
      res.status(200).json("Cart deleted.")
    } catch (err) {
      next(err)
    }
  }
)

// Get Cart
router.get(
  "/find/:userid",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    try {
      const cart = await Cart.findOne({ userId: req.params.userid })
      res.status(200).json(cart)
    } catch (err) {
      next(err)
    }
  }
)

// Get All Carts
router.get("/all", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(Carts)
  } catch (err) {
    next(err)
  }
})

module.exports = router
