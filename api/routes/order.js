const router = require("express").Router()
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken")
const Order = require("../models/Order")

// Create
router.post("/", verifyTokenAndAuthorization, async (req, res, next) => {
  const newOrder = new Order(req.body)
  try {
    const savedOrder = await newOrder.save()
    res.status(200).json(savedOrder)
  } catch (err) {
    next(err)
  }
})

// Update
router.put("/update/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedOrder)
  } catch (err) {
    next(err)
  }
})

// Delete
router.delete(
  "/delete/:id",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    try {
      await Order.findByIdAndDelete(req.params.id)
      res.status(200).json("Order deleted.")
    } catch (err) {
      next(err)
    }
  }
)

// Get Order
router.get(
  "/find/:userid",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    try {
      const orders = await Order.findOne({ userId: req.params.userid })
      res.status(200).json(orders)
    } catch (err) {
      next(err)
    }
  }
)

// Get All Orders
router.get("/all", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const orders = await Order.find()
    res.status(200).json(orders)
  } catch (err) {
    next(err)
  }
})

// Get Monthly Income
router.get("/income", verifyTokenAndAdmin, async (req, res, next) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ])
    res.status(200).json(income)
  } catch (err) {
    next(err)
  }
})

module.exports = router
