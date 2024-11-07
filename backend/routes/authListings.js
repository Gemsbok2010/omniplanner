const express = require("express");
const router = express.Router();

// Imports
const Listing = require("../models/listingModel");
const Campaign = require("../models/campaignModel");

const { listingEditValidation } = require("../validation");

//============ CREATE NEW CAMPAIGN ==============
router.post("/createCampaign", async (req, res, next) => {
  // Check profession if already exist in database
  const campaignExist = await Campaign.findOne({
    category: req.body.category,
    campaignName: req.body.campaignName,
  });
  if (campaignExist)
    return res.status(400).json({
      invalid: "Campaign of this Category exists already.",
    });

  const months = req.body.season;

  months.sort((a, b) => {
    const monthOrder = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
  });

  const campaign = new Campaign({
    category: req.body.category,
    description: req.body.description,
    campaignName: req.body.campaignName,
    rationale: req.body.rationale,
    examples: req.body.examples,
    noDays: req.body.noDays,
    planDays: req.body.planDays,
    budget: req.body.budget,
    season: months,
    market: req.body.market,
    toMarket: req.body.toMarket,
    // OFFER
    loyalty: req.body.loyalty,
    discount: req.body.discount,
    gratuity: req.body.gratuity,
    prizeOffers: req.body.prizeOffers,
    noOffer: req.body.noOffer,

    // PRIMARY
    brandings: req.body.brandings,
    revenues: req.body.revenues,
    sales: req.body.sales,
    aquisitions: req.body.aquisitions,
    reengagements: req.body.reengagements,
    loyaltypoints: req.body.loyaltypoints,
    conversions: req.body.conversions,
    // SECONDARY
    secRevenues: req.body.secRevenues,
    secRevenue: req.body.secRevenue,
    secSale: req.body.secSale,
    secSales: req.body.secSales,
    secAqui: req.body.secAqui,
    secaquisitions: req.body.secaquisitions,
    secreeng: req.body.secreeng,
    secReengagements: req.body.secReengagements,
    secloyaltypoints: req.body.secloyaltypoints,
    secloyalty: req.body.secloyalty,
    secconv: req.body.secconv,
    secconversions: req.body.secconversions,
    // PLATFORM
    desktop: req.body.desktop,
    mobweb: req.body.mobweb,
    mobileApp: req.body.mobileApp,
    facebook: req.body.facebook,
    instagram: req.body.instagram,
    weibo: req.body.weibo,
    newsletter: req.body.newsletter,
    linkedin: req.body.linkedin,
    threads: req.body.threads,
    youtube: req.body.youtube,
    wechat: req.body.wechat,
    tiktok: req.body.tiktok,
    twitter: req.body.twitter,
    // standard
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  });

  try {
    const storedCampaign = await campaign.save();

    res.send(storedCampaign);
  } catch (err) {
    res.redirect(process.env.FRONTEND_URL + "/dashboard");
  }
});

// Pause Campaign (from Campaigns.js)
router.put("/sleepCampaign/:id", async (req, res) => {
  const campaign = await Campaign.findOne({ _id: req.params.id });

  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }

  const total = await Campaign.find({
    nanoId: campaign.nanoId,
  }).countDocuments();

  let perPage = 10;
  let maxPage = Math.ceil(total / perPage);
  const page = req.query.page && total > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedCampaign = await Campaign.updateOne(
      { _id: req.params.id },
      { pauseCampaign: req.body.pauseCampaign }
    );

    const display = await Campaign.find({
      _id: campaign._id,
      pauseCampaign: false,
    }).countDocuments();

    let adPosts = await Campaign.find({
      _id: campaign._id,
    })
      .sort({ category: -1 })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      storedCampaign: storedCampaign,
      adPosts: adPosts,
      total: total,
      sort: sort,
      maxPage: maxPage,
      page: page,
      display: display,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// ======= DELETE SUBJECT (from Campaigns.js) =========
router.delete("/deleteCampaign/:id", async (req, res) => {
  const deleted = await Campaign.deleteOne({ _id: req.params.id });

  const display = await Campaign.find({
    _id: req.params.id,
  }).countDocuments();

  res.json({ deleted: deleted, display: display });
});

//======== EDIT SUBJECT (from TeacherSubjects.js) ==========
router.get("/edit/:id", async (req, res) => {
  const subject = await Campaign.findOne({ _id: req.params.id });

  res.redirect(process.env.FRONTEND_URL + "campaignEdit/" + req.params.id);
});

//==== EDIT CAMPAING DETAILS (from CampaignEdit.js) =====

router.get("/campaignEdit/:id", async (req, res) => {
  try {
    const this_campaign = await Campaign.findOne({ _id: req.params.id });

    res.status(200).json({
      this_campaign: this_campaign,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ============= UPDATE IN SUBJECT EDIT ================
router.put("/edit", async (req, res, next) => {
  const months = req.body.season;

  months.sort((a, b) => {
    const monthOrder = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return monthOrder.indexOf(a) - monthOrder.indexOf(b);
  });

  req.body.season = months;

  Campaign.findByIdAndUpdate(req.body.id, req.body).then(function (
    storedCampaign
  ) {
    res.send(storedCampaign);
  });
});

//=========== GET CAMPAIGNS (From Campaigns.js) ============
router.get("/search", async (req, res) => {
  Campaign.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === "asc" || sort === "-1") {
      sort = -1;
    }

    let match = {};

    const total = await Campaign.find(match).countDocuments();

    let perPage = 10;
    let maxPage = Math.ceil(total / perPage);
    const page =
      req.query.page && total > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");

    const display = await Campaign.find({
      pauseCampaign: false,
    }).countDocuments();

    try {
      const campaigns = await Campaign.find(match)
        .sort({ category: 1 })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        campaigns: campaigns,
        total: total,
        page: page,
        maxPage: maxPage,
        sort: sort,
        display: display,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//============ GET TEACHER FILTERS ==============
router.get("/database", async (req, res) => {
  Campaign.paginate({}, {}).then(async (result) => {
    let sort = req.query.sort;
    if (sort === -1 || sort === "-1") {
      sort = -1;
    } else {
      sort = 1;
    }

    let match = { pauseCampaign: false };

    // Categories
    if (req.query.categories !== "") {
      const breakCategories = req.query.categories;
      const categoryArr = breakCategories.split(",");
      match["category"] = { $in: categoryArr };
    }

    // Location (Markets)
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["market"] = { $in: stateArr };
    }

    // Location (Markets)
    if (req.query.toLocation !== "") {
      const breakToLocation = req.query.toLocation;
      const staatArr = breakToLocation.split(",");
      match["toMarket"] = { $in: staatArr };
    }

    // Season
    if (req.query.season !== "") {
      const breakSeason = req.query.season;
      const seasonArr = breakSeason.split(",");
      match["season"] = { $in: seasonArr };
    }

    // Primary
    if (req.query.primary.length !== 0) {
      const breakPrimary = req.query.primary;
      match["$expr"] = {
        $gte: [{ $size: `$${breakPrimary}` }, 1],
      };
    }

    // Secondary
    const res1 = { $expr: { $gte: [{ $size: "$secSales" }, 1] } };

    const res2 = { $expr: { $gte: [{ $size: "$secRevenues" }, 1] } };

    const res3 = { $expr: { $gte: [{ $size: "$secconversions" }, 1] } };

    const res4 = { $expr: { $gte: [{ $size: "$secaquisitions" }, 1] } };

    const res5 = { $expr: { $gte: [{ $size: "$secloyaltypoints" }, 1] } };

    const res6 = { $expr: { $gte: [{ $size: "$secReengagements" }, 1] } };

    let tl = [];

    if (req.query.secRevenue === "true") {
      tl.push(res2);
      match["$or"] = tl;
    }
    if (req.query.secSale === "true") {
      tl.push(res1);
      match["$or"] = tl;
    }
    if (req.query.secconv === "true") {
      tl.push(res3);
      match["$or"] = tl;
    }
    if (req.query.secAqui === "true") {
      tl.push(res4);
      match["$or"] = tl;
    }
    if (req.query.secloyalty === "true") {
      tl.push(res5);
      match["$or"] = tl;
    }
    if (req.query.secreeng === "true") {
      tl.push(res6);
      match["$or"] = tl;
    }

    // Type of Offers

    const off2 = { $expr: { $gte: [{ $size: "$gratuity" }, 1] } };

    const off3 = { $expr: { $gte: [{ $size: "$discount" }, 1] } };

    const off4 = { $expr: { $gte: [{ $size: "$loyalty" }, 1] } };

    let offer = [];

    if (req.query.prize === "true") {
      offer.push({ prizeOffers: true });
      match["$or"] = offer;
    }

    if (req.query.gratuity === "true") {
      offer.push(off2);
      match["$or"] = offer;
    }
    if (req.query.discount === "true") {
      offer.push(off3);
      match["$or"] = offer;
    }
    if (req.query.loyalty === "true") {
      offer.push(off4);
      match["$or"] = offer;
    }

    const num = await Campaign.find(match).countDocuments();

    const categories = await Campaign.find({ pauseCampaign: false }).sort({
      category: 1,
    });

    let perPage = 100;
    let maxPage = Math.ceil(num / perPage);
    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    try {
      const campaigns = await Campaign.find(match)
        .sort({ category: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      console.log(match, "match");

      res.status(200).json({
        campaigns: campaigns,
        num: num,
        page: page,
        maxPage: maxPage,
        sort: sort,
        categories: categories,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//============ GET PERSONAL DETAILS PAGE ==============
router.get("/getCampaign/:id", async (req, res) => {
  try {
    const campaign = await Campaign.findById({ _id: req.params.id });

    res.status(200).json(campaign);
  } catch (err) {
    res.status(500).json(err);
  }
});

//========== GET SEARCH FILTERS (From Searchlist.js) ============
router.get("/search", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    let locatie = req.query.location;

    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }
    let match = {
      isActiveJob: true,
      isDeletedJob: false,
    };

    // Contract Type
    if (req.query.contract) {
      const breakContract = req.query.contract;
      const contractArr = breakContract.split(",");
      const ans = { contract: contractArr };
      let contract = [];
      if (contractArr) {
        contract = contractArr;
        match["contractType"] = contract;
      }
    }

    // Professions
    if (req.query.professions) {
      const breakProfessions = req.query.professions;
      const professionArr = breakProfessions.split(",");
      const ans = { professions: professionArr };

      let professions = [];
      if (professionArr) {
        professions = professionArr;
        match["professions"] = professions;
      }
    }

    // Location (STATE)
    if (req.query.location) {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");

      let location = [];

      if (stateArr) {
        location = stateArr;

        const ans2 = { state: stateArr };
        let od = [ans2];
        match["$or"] = od;
      }
    }
    // Location (STATE ONLY)
    if (req.query.location) {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    const num = await Listing.find(match).countDocuments();
    const professions = await Profession.find({ showProfession: true });

    let perPage = 6;
    let maxPage = Math.ceil(num / perPage);
    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");

    try {
      const adPosts = await Listing.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      // GET LONGITUDE AND LATITUDE
      let longArr = [];

      for (var i = 0; i < adPosts.length; i++) {
        var results = adPosts[i].longitude;
        longArr.push(results);
      }

      let latArr = [];

      for (var j = 0; j < adPosts.length; j++) {
        var posts = adPosts[j].latitude;
        latArr.push(posts);
      }

      res.status(200).json({
        adPosts: adPosts,
        num: num,
        page: page,
        maxPage: maxPage,
        sort: sort,
        professions: professions,
        longArr: longArr,
        latArr: latArr,
        location: locatie,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//=========== VIEW OR REDIRECT TO AD DETAILS ============
// (from searchlist.js and applicationsManager.js)
//View by Slug Number page
router.get("/adPosts/:slug", async (req, res) => {
  const post = await Listing.findOne({ slug: req.params.slug });

  if (post.contractType === "Locum") {
    res.redirect(process.env.FRONTEND_URL + "Ad_details/" + req.params.slug);
  } else {
    res.redirect(
      process.env.FRONTEND_URL + "Ad_details_std/" + req.params.slug
    );
  }
});

//=========== GET AD DETAILS ============
// (from searchlist.js and applicationsManager.js)
//View by Slug Number page
router.get("/listingEditReg/:slug", async (req, res) => {
  try {
    const listing = await Listing.findOne({ slug: req.params.slug });

    res.status(200).json({
      listing: listing,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//============ GET LISTINGMANAGER.JS ==============
router.get("/listingmanager", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    const email = req.query.email;

    let match = { email: email, isDeletedJob: false };
    let Cmatch = { isRejected: false, slugId: req.query.slug };

    // Contract Type
    if (req.query.contract !== "") {
      const breakContract = req.query.contract;
      const contractArr = breakContract.split(",");
      const ans = { contract: contractArr };
      let contract = [];
      if (contractArr) {
        contract = contractArr;
        match["contractType"] = contract;
        Cmatch["contractType"] = contract;
      }
    }

    // Professions
    if (req.query.professions !== "") {
      const breakProfessions = req.query.professions;
      const professionArr = breakProfessions.split(",");
      const ans = { professions: professionArr };

      let professions = [];
      if (professionArr) {
        professions = professionArr;
        match["professions"] = professions;
        Cmatch["professions"] = professions;
      }
    }

    // Location (STATE )
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");

      let location = [];
      if (stateArr) {
        location = stateArr;
        const ans = { state: stateArr };
        od = [ans];
        match["$or"] = od;
        Cmatch["$or"] = od;
      }
    }
    // Location (STATE ONLY)
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
      Cmatch["state"] = stateArr;
    }

    const num = await Listing.find(match).countDocuments();

    const professions = await Profession.find({ showProfession: true });

    let perPage = 10;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const adPosts = await Listing.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      const candidat = await Listing.find({
        email: email,
        isActiveJob: true,
      });

      let slugArr = [];
      for (var i = 0; i < candidat.length; i++) {
        var results = candidat[i].slug;
        slugArr.push(results);
      }

      res.status(200).json({
        adPosts: adPosts,
        num: num,
        page: page,
        maxPage: maxPage,
        sort: sort,
        professions: professions,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

// Candidates Slug Number (from ListingManager.js)
router.put("/sleepAd/:slug", async (req, res) => {
  const user = await Listing.findOne({ slug: req.params.slug });
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }

  const num = await Listing.find({
    isActiveJob: req.body.isActiveJob,
    isDeletedJob: false,
    slug: req.params.slug,
  }).countDocuments();

  let perPage = 10;
  let maxPage = Math.ceil(num / perPage);
  const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedUser = await Listing.updateOne(
      { slug: req.params.slug },
      { isActiveJob: req.body.isActiveJob }
    );
    let adPosts = await Listing.find({
      email: user.email,
      isDeletedJob: false,
    }).sort({
      createdAt: sort,
    });

    res.send({
      storedUser: storedUser,
      adPosts: adPosts,
      sort: sort,
      maxPage: maxPage,
      page: page,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// ============= DELETE IN EDIT ================
router.put("/delete/:slug", async (req, res) => {
  try {
    // Listings => Paused and Expired
    let set = {};
    set["isDeletedJob"] = req.body.isDeletedJob;
    set["isActiveJob"] = req.body.isActiveJob;

    const storedUser = await Listing.updateMany(
      { slug: req.params.slug },
      { $set: set }
    );

    res.json({
      storedUser: storedUser,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// ============= UPDATE IN EDIT ================
router.put("/edit", async (req, res, next) => {
  const { error } = listingEditValidation(req.body);

  if (error) return res.status(400).json({ invalid: error.details[0].message });

  Listing.findByIdAndUpdate(req.body.slug, req.body).then(function (
    storedUser
  ) {
    res.send(storedUser);
  });
});

//============ GET PROFESSIONS IN HOMEPAGE (From Home.js) ==============
router.get("/homenavlist", async (req, res) => {
  Profession.paginate({}, {}).then(async (result) => {
    const num = await Profession.find({
      showProfession: true,
      contractType: req.query.contract,
    }).countDocuments();

    let perPage = 7;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    try {
      const professions = await Profession.find({
        showProfession: true,
        contractType: req.query.contract,
      })
        .skip((page - 1) * perPage)
        .limit(perPage)
        .sort({ professionName: "asc" });

      res.status(200).json({
        professions: professions,
        maxPage: maxPage,
        page: page,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//======= GET PROFESSIONS IN PERSONAL DETAILS (From PersonalDetails.js) =========
router.get("/listOfProfessions", async (req, res) => {
  try {
    const professions = await Profession.find({
      showProfession: true,
    }).sort({ professionName: "asc" });

    res.status(200).json({
      professions: professions,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//================ VIEW CAMPAIGN ======================
// (from campaignadvisor.js )
router.get("/campaign/:_id", async (req, res) => {
  const campaign = await Campaign.findOne({ _id: req.params._id });

  if (campaign === null) {
    res.redirect("/");
  } else {
    res.redirect(process.env.FRONTEND_URL + "campaign/" + req.params._id);
  }
});

module.exports = router;
