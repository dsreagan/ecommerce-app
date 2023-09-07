const router = require("express").Router()
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// Registration
router.post("/register", async (req, res, next) => {
  try {
    // check first to see if the username or email are already registered
    const user = await User.findOne({
      $or: [{ username: req.body.username }, { email: req.body.email }],
    })
    if (user && user.username === req.body.username)
      res.status(500).json("Username already exists.")
    else if (user && user.email === req.body.email)
      res.status(500).json("Email is already registered.")

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_KEY
      ).toString(),
    })

    const savedUser = await newUser.save()
    const { password, ...userInfo } = savedUser._doc
    res.status(201).json({ ...userInfo })
  } catch (err) {
    next(err)
  }
})

// Login
router.post("/login", async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user && res.status(401).json("Wrong username.")
    const hashedPW = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_KEY
    )
    const storedPassword = hashedPW.toString(CryptoJS.enc.Utf8)
    req.body.password !== storedPassword &&
      res.status(401).json("Wrong Password.")
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_KEY,
      { expiresIn: "3d" }
    )
    const { password, ...userInfo } = user._doc
    res.status(200).json({ ...userInfo, accessToken })
  } catch (err) {
    next(err)
  }
})

module.exports = router
