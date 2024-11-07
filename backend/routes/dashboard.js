const express = require("express");
const router = express.Router();

// Imports
const User = require("../models/userModel");
const Listing = require("../models/listingModel");
const Newsletter = require("../models/briefModel");

const { smValidation } = require("../validation");

//=========== GET LOCUM PROFILE (from Dashboard.js) ===========
router.get("/dashboard/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    const { error } = await smValidation({
      firstName: user.firstName,
      email: req.params.email,
    });

    const total = await Newsletter.find({
      showTicket: true,
      email: req.params.email,
    }).countDocuments();

    const locum = await Newsletter.findOne({ email: req.params.email });

    const num = await Listing.find({
      isActiveJob: true,
      isDeletedJob: false,
    }).countDocuments();

    const mylistings = await Listing.find({
      email: req.params.email,
      isActiveJob: true,
      isDeletedJob: false,
    }).countDocuments();

    const candidat = await Listing.find({
      email: req.params.email,
      isActiveJob: true,
      isDeletedJob: false,
    });

    let slugArr = [];
    for (var i = 0; i < candidat.length; i++) {
      var results = candidat[i].slug;
      slugArr.push(results);
    }

    res.status(200).json({
      user: user,
      locum: locum,
      total: total,
      num: num,
      mylistings: mylistings,
      error: error,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
