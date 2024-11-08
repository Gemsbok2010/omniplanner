const express = require("express");
const router = express.Router();

// Imports
const User = require("../models/userModel");
const Listing = require("../models/listingModel");
const Newsletter = require("../models/briefModel");
const Campaign = require("../models/campaignModel");

const { smValidation } = require("../validation");

//=========== GET LOCUM PROFILE (from Dashboard.js) ===========
router.get("/dashboard/:email", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.params.email });

    const { error } = await smValidation({
      firstName: user.firstName,
      email: req.params.email,
    });

    const campaigns = await Campaign.find({
      pauseCampaign: false,
    }).countDocuments();

    const total = await Newsletter.find({
      showTicket: true,
      email: req.params.email,
    }).countDocuments();

    const expired = await Newsletter.find({
      email: req.params.email,
      showTicket: false,
    }).countDocuments();

    const current = await Newsletter.find({
      email: req.params.email,
      showTicket: true,
    }).countDocuments();

    res.status(200).json({
      user: user,
      total: total,
      expired: expired,
      current: current,
      error: error,
      campaigns: campaigns,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
