const express = require("express");
const router = express.Router();
const generate = require("nanoid-generate");
const ticketId = generate.numbers(7);
require("dotenv/config");
const moment = require("moment");
const cron = require("node-cron");

// Imports
const User = require("../models/userModel");
const Newsletter = require("../models/briefModel");

// ======== CRON JOB - Schedule tasks to be run on the server ======== //.
cron.schedule(
  "* * * * *",
  async () => {
    let today = new Date();
    today = today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
    let match = {};
    match["expiryDate"] = { $lt: today };

    let set = {};
    set["showTicket"] = false;

    await Newsletter.updateMany(match, { $set: set });

    console.log(`cron performed on Listing ${today}`);
  },
  {
    scheduled: true,
    timezone: "Australia/Sydney",
  }
);

//==================== STEP 3 =================
router.put("/step5", async (req, res, next) => {
  try {
    const storeExp = new Date(req.query.expiryDate);

    storeExp.setDate(storeExp.getDate() + 1);

    // Generate local timeone for MongoDB
    let dt = new Date();

    dt = dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());

    const brief = new Newsletter({
      ticketId: "RX" + ticketId,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      type: req.body.type,
      campaignName: req.body.campaignName,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      noDays: req.body.noDays,
      expiryDate: req.body.expiryDate,
      description: req.body.description,
      // OFFERS
      discountOffers: req.body.discountOffers,
      discount: req.body.discount,
      airfare: req.body.airfare,
      ancillary: req.body.ancillary,
      thirdParty: req.body.thirdParty,
      stopoverDiscount: req.body.stopoverDiscount,
      fpassDiscount: req.body.fpassDiscount,
      gratuityOffers: req.body.gratuityOffers,
      gratuity: req.body.gratuity,
      compTkt: req.body.compTkt,
      companion: req.body.companion,
      compBag: req.body.compBag,
      compSeat: req.body.compSeat,
      compLounge: req.body.compLounge,
      compPriority: req.body.compPriority,
      compFast: req.body.compFast,
      compTransfer: req.body.compTransfer,
      compStopover: req.body.compStopover,
      focChange: req.body.focChange,
      loyaltyOffers: req.body.loyaltyOffers,
      loyalty: req.body.loyalty,
      extraPoints: req.body.extraPoints,
      tierExt: req.body.tierExt,
      statusPoints: req.body.statusPoints,
      pointsVal: req.body.pointsVal,
      lowerTier: req.body.lowerTier,
      buyPoints: req.body.buyPoints,
      mgmPoints: req.body.mgmPoints,
      prizeOffers: req.body.prizeOffers,
      noOffer: req.body.noOffer,
      status: "Created",
      created_date: moment().format("DD MMM YYYY"),
      expiryDate: storeExp,
      // ONLINE
      onlineMarkets: req.body.onlineMarkets,
      market: req.body.market,
      allmarkets: req.body.allmarkets,
      jordan: req.body.jordan,
      egypt: req.body.egypt,
      uae: req.body.uae,
      turkiye: req.body.turkiye,
      india: req.body.india,
      pakistan: req.body.pakistan,
      bangladesh: req.body.bangladesh,
      france: req.body.france,
      germany: req.body.germany,
      uk: req.body.uk,
      ksa: req.body.ksa,
      thailand: req.body.thailand,
      // OFFLINE
      offlineMarkets: req.body.offlineMarkets,
      offlineMarket: req.body.offlineMarket,
      offallmarkets: req.body.offallmarkets,
      offjordan: req.body.offjordan,
      offegypt: req.body.offegypt,
      offuae: req.body.offuae,
      offturkiye: req.body.offturkiye,
      offindia: req.body.offindia,
      offpakistan: req.body.offpakistan,
      offbangladesh: req.body.offbangladesh,
      offfrance: req.body.offfrance,
      offgermany: req.body.offgermany,
      offuk: req.body.offuk,
      offksa: req.body.offksa,
      offthailand: req.body.offthailand,
      // PRIMARY
      primary: req.body.primary,
      revenues: req.body.revenues,
      sales: req.body.sales,
      aquisitions: req.body.aquisitions,
      reengagements: req.body.reengagements,
      conversions: req.body.conversions,
      loyaltypoints: req.body.loyaltypoints,
      //SECONDARY
      secRevenue: req.body.secRevenue,
      secRevenues: req.body.secRevenues,
      secSale: req.body.secSale,
      secSales: req.body.secSales,
      secAqui: req.body.secAqui,
      secaquisitions: req.body.secaquisitions,
      secreeng: req.body.secreeng,
      secReengagements: req.body.secReengagements,
      secloyalty: req.body.secloyalty,
      secloyaltypoints: req.body.secloyaltypoints,
      secconv: req.body.secconv,
      secconversions: req.body.secconversions,
      // PLATFORMS
      desktop: req.body.desktop,
      channels: req.body.channels,
      lpage: req.body.lpage,
      dedicatedtile: req.body.dedicatedtile,
      hero: req.body.hero,
      loadscreen: req.body.loadscreen,
      destination: req.body.destination,
      offpage: req.body.offpage,
      mobweb: req.body.mobweb,
      mobileApp: req.body.mobileApp,
      mobChannels: req.body.mobChannels,
      splashscreen: req.body.splashscreen,
      mobTile: req.body.mobTile,
      mobDestination: req.body.mobDestination,
      // CAMPAIGN REQUIREMENTS
      copybrief: req.body.copybrief,
      mediaPlan: req.body.mediaPlan,
      webapp: req.body.webapp,
      budget: req.body.budget,
      tnc: req.body.tnc,
      terms: req.body.terms,
      asset: req.body.asset,
      creativeAssets: req.body.creativeAssets,
      copy: req.body.copy,
      translation: req.body.translation,
      audience: req.body.audience,
      targetAudience: req.body.targetAudience,
      tracking: req.body.tracking,
      analytics: req.body.analytics,
      targetAnalytics: req.body.targetAnalytics,
      createdAt: dt,
    });

    const storedBrief = await brief.save();

    res.send(storedBrief);
  } catch (err) {
    res.status(400).json({ err });
  }
});

//============ GET BRIEF PROFILE (from Preview.js) ==============
router.get("/profilePreview/:ticketId", async (req, res) => {
  try {
    const brief = await Newsletter.findOne({ ticketId: req.params.ticketId });
    res.status(200).json(brief);
  } catch (err) {
    res.status(500).json(err);
  }
});

//============ USER GET LOCUM (from LocumProfile.js and LocumCV.js) ==============
router.get("/profile/:ticketId", async (req, res) => {
  try {
    const ticket = await Newsletter.findOne({ ticketId: req.params.ticketId });

    res.status(200).json(ticket);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ======= UPDATE BRIEF  (from BriefEdit.js) ========
router.put("/updateBrief", async (req, res, next) => {
  if (req.query.expiryDate) {
    const expiryDate = new Date(req.query.expiryDate);

    expiryDate.setDate(expiryDate.getDate() + 1);

    let set = {};
    set["expiryDate"] = expiryDate;

    await Newsletter.updateMany({ _id: req.body._id }, { $set: set });
  }

  Newsletter.findByIdAndUpdate(req.body._id, req.body).then(function () {
    Newsletter.findById({ _id: req.body._id }).then(function (storedUser) {
      storedUser.save();
      res.send(storedUser);
    });
  });
});

// ===== UPDATE LOCUM SKILLS & EXPERIENCES (from LocumCV.js) =====
router.put("/updateCv", async (req, res, next) => {
  Newsletter.findByIdAndUpdate(req.body._id, req.body).then(function () {
    Newsletter.findById({ _id: req.body._id }).then(function (storedUser) {
      storedUser.save();
      res.send(storedUser);
    });
  });
});

// ============== PREVIEW CV (from Resume.js) ===============
router.get("/preview/:ticketId", async (req, res) => {
  const edm = await Newsletter.findOne({ ticketId: req.params.ticketId });

  if (edm === null) {
    res.redirect(process.env.FRONTEND_URL);
  } else {
    res.redirect(process.env.FRONTEND_URL + "preview/" + req.params.ticketId);
  }
});

// ============== PREVIEW CV (from Resume.js) ===============
router.get("/brief/:ticketId", async (req, res) => {
  const edm = await Newsletter.findOne({ ticketId: req.params.ticketId });

  if (edm === null) {
    res.redirect(process.env.FRONTEND_URL);
  } else {
    res.redirect(process.env.FRONTEND_URL + "brief/" + req.params.ticketId);
  }
});

//================ VIEW RESUME =================
// (from Briefs.js )
router.get("/edit/:ticketId", async (req, res) => {
  const brief = await Newsletter.findOne({ ticketId: req.params.ticketId });

  if (brief === null) {
    res.redirect(process.env.FRONTEND_URL);
  } else {
    res.redirect(
      process.env.FRONTEND_URL + "brief_edit/" + req.params.ticketId
    );
  }
});

//============ GET LOCUM FILTERS ==============
router.get("/database", async (req, res) => {
  Newsletter.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;

    if (sort === undefined || sort === "-1") {
      sort = -1;
    }

    let match = { email: req.query.email };

    // STATUS
    if (req.query.status) {
      const breakStatus = req.query.status;
      const stateArr = breakStatus.split(",");

      let status = [];

      if (stateArr) {
        status = stateArr;

        const ans2 = { status: stateArr };
        let od = [ans2];
        match["$or"] = od;
      }
    }

    const num = await Newsletter.find(match).countDocuments();

    let perPage = 12;
    let maxPage = Math.ceil(num / perPage);
    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");

    try {
      const briefs = await Newsletter.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        briefs: briefs,
        num: num,
        page: page,
        maxPage: maxPage,
        sort: sort,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});



//============ GET CALENDAR.JS ==============
router.get("/calendar", async (req, res) => {
  let email = req.query.email;

  const match = {
    email: email,
  };

  try {
    console.log(match, "match");
    const adPosts = await Newsletter.find(match);

    res.status(200).json({
      adPosts: adPosts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ============= JOB CASES (from dashboard.js) ================
router.get("/jobcases", async (req, res, next) => {
  const who = await User.find({ nanoId: req.query.nanoId });

  try {
    const rte = await Newsletter.find({
      email: who[0].email,
      showTicket: true,
      edm: "RTE",
    }).countDocuments();

    const edm = await Newsletter.find({
      email: who[0].email,
      showTicket: true,
      edm: "eDM",
    }).countDocuments();

    const campaign = await Newsletter.find({
      email: who[0].email,
      showTicket: true,
      edm: "Event",
    }).countDocuments();

    const event = await Newsletter.find({
      email: who[0].email,
      showTicket: true,
      edm: "Event",
    }).countDocuments();

    const expired = await Newsletter.find({
      showTicket: false,
      email: who[0].email,
    }).countDocuments();

    const current = await Newsletter.find({
      showTicket: true,
      email: who[0].email,
    }).countDocuments();

    res.status(200).json({
      expired: expired,
      current: current,
      rte: rte,
      campaign: campaign,
      event: event,
      edm: edm,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
