const express = require("express");
const router = express.Router();

// Imports
const User = require("../models/userModel");
const Listing = require("../models/listingModel");

const { detailsValidation } = require("../validation");

//============ GET PERSONAL DETAILS PAGE ==============
router.get("/allusers/:id", async (req, res) => {
 
  try {
    const user = await User.findById({ _id: req.params.id });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//==================== UPDATE IN PERSONAL DETAILS =================
router.put("/allusers", async (req, res, next) => {
  try {
    const { error } = detailsValidation(req.body);

    if (error)
      return res.status(400).json({ invalid: error.details[0].message });

    const { email } = req.body;

    const user = await User.findOne({ email });

    let set = {};
    set["firstName"] = req.body.firstName;
    set["lastName"] = req.body.lastName;
    await Listing.updateMany({ email: email }, { $set: set });

    // New data (from req.body) to database
    User.findByIdAndUpdate(user._id, req.body).then(function () {
      User.findOne(user._id).then(function (storedUser) {
        storedUser.save();
        res.send(storedUser);
      });
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
