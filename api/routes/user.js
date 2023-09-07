const router = require("express").Router()
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../services/verifyToken")
const User = require("../models/User")

// Update
router.put(
  "/update/:id",
  verifyTokenAndAuthorization,
  async (req, res, next) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_KEY
      ).toString()
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      const { password, ...updatedUserInfo } = updatedUser._doc
      res.status(200).json(updatedUserInfo)
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
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json("User deleted.")
    } catch (err) {
      next(err)
    }
  }
)

// Get User
router.get("/find/:id", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...userInfo } = user._doc
    res.status(200).json(userInfo)
  } catch (err) {
    next(err)
  }
})

// Get All Users
router.get("/all", verifyTokenAndAdmin, async (req, res, next) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (err) {
    next(err)
  }
})

// Get User Stats
// Number of Users Per Month
router.get("/stats", verifyTokenAndAdmin, async (req, res, next) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
  try {
    const data = await User.aggregate([
      {
        $match: { createdAt: { $gte: lastYear } },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ])
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

module.exports = router
