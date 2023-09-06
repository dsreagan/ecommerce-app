const router = require("express").Router()
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")
const User = require("../models/User")

// Registration
router.post("/register", async (req, res) => {
  // error handle by checking if these fields exist and send a response if not

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_KEY
    ).toString(),
  })

  try {
    const savedUser = await newUser.save()
    const { password, ...userInfo } = savedUser._doc
    res.status(201).json({ ...userInfo })
  } catch (err) {
    res.status(500).json(err)
  }
})

// Login
router.post("/login", async (req, res) => {
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
    res.status(500).json(err)
  }
})

module.exports = router
