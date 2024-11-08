const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const { generateToken } = require("../util");
const { signUpValidation, loginValidation } = require("../validation");

//============ SIGN UP ==============
router.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;
    const rx_email = email.split("@")[1];

    if (rx_email !== "riyadhair.com")
      return res.status(400).json({
        prompt: "The <b>email</b> address must be your Riyadh Air email.</a>",
      });

    //LETS VALIDATE THE DATA BEFORE
    const { error } = signUpValidation(req.body);

    if (error)
      return res.status(400).json({ invalid: error.details[0].message });

    // Check email if already exist in database
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist)
      return res.status(400).json({
        prompt:
          "This <b>email</b> address has already been registered. Please ensure you are using your Riyadh Air email.",
      });

    // Generate local timeone for MongoDB
    let now = new Date();
    now = now.setMinutes(now.getMinutes() - now.getTimezoneOffset());

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: email,
      createdAt: now,
    });
    const savedUser = await user.save();

    const token = generateToken(savedUser);
    res.cookie("authToken", token, { httpOnly: false });

    res.send({ user: savedUser, token: token });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//=================== EMAIL LOGIN ================
router.post("/login", async (req, res) => {
  const { email } = req.body;
  const rx_email = email.split("@")[1];

  if (rx_email !== "riyadhair.com")
    return res.status(400).json({
      invalid: "The <b>email</b> address must be your Riyadh Air email.</a>",
    });

  //LETS VALIDATE THE DATA BEFORE
  const { error } = await loginValidation(req.body);

  if (error) return res.status(400).json({ invalid: error.details[0].message });

  // If no email exists in database
  const user = await User.findOne({ email });

  if (!user) {
    res.status(400).json({
      invalid: "Email is incorrect. Please check your inputs and try again.",
    });
  } else {
    const authToken = generateToken(user);

    res.cookie("authToken", authToken, { httpOnly: false });
    if (user.isAdmin) {
      const adminToken = generateToken(user);
      res.cookie("adminToken", adminToken, { httpOnly: false });
    }
    res.json({ user, authToken });
  }
});

module.exports = router;
