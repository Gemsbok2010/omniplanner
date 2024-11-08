const express = require("express");
const router = express.Router();
require("dotenv/config");
const multer = require("multer");
const path = require("path");
const fs = require("fs-extra");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

// Imports
const User = require("../models/userModel");
const Listing = require("../models/listingModel");
const Newsletter = require("../models/briefModel");
const Homepage = require("../models/homepageModel");
const { uploadFile } = require("../../s3");

// ============= BLACLIST AN USER (From Ausers.js) =============
router.put("/blackme/:id", async (req, res) => {
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }

  let num = await User.find({ isAdmin: true }).countDocuments();

  let total = await User.find().countDocuments();

  let perPage = 25;
  let maxPage = Math.ceil(total / perPage);
  const page = req.query.page && total > perPage ? parseInt(req.query.page) : 1;

  try {
    const storedUser = await User.updateOne(
      { _id: req.params.id },
      { isActive: req.body.isActive }
    );

    const justMe = await User.find({ _id: req.params.id });

    let set = {};
    set["isActiveJob"] = false;

    await Listing.updateMany({ email: justMe[0].email }, { $set: set });

    await User.updateOne({ email: justMe[0].email }, { isAdmin: false });

    const blacklisted = await User.find({ isActive: false }).countDocuments();

    const allUsers = await User.find({})
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      justMe: justMe,
      num: num,
      total: total,
      allUsers: allUsers,
      page: page,
      maxPage: maxPage,
      sort: sort,
      blacklisted: blacklisted,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

// ============ MAKE USER AN ADMIN (From Ausers.js) ============
router.put("/makeAdmin/:id", async (req, res) => {
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }
  let num = await User.find({ isAdmin: true }).countDocuments();

  let total = await User.find().countDocuments();

  let perPage = 25;
  let maxPage = Math.ceil(total / perPage);
  const page = req.query.page && total > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedUser = await User.updateOne(
      { _id: req.params.id },
      { isAdmin: req.body.isAdmin }
    );

    const allUsers = await User.find()
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      storedUser: storedUser,
      num: num,
      total: total,
      allUsers: allUsers,
      page: page,
      maxPage: maxPage,
      sort: sort,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//=========== UPLOAD IMAGES (From Ausers.js) ==============

//Set Storage Engine
const storage = multer.diskStorage({
  destination: "./frontend/public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Init upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
}).single("file");

function checkFileType(file, cb) {
  //allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  //Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  //Check mime
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    return cb(null, true);
  } else {
    cb("Error: Images Only!");
  }
}

router.post("/upload", async (req, res) => {
  try {
    upload(req, res, async (err) => {
      const email = req.query.email;
      const user = await User.findOne({ email });

      if (req.file === undefined) {
        res.json({
          invalid: "No files or file not accepted or file size exceeds limit.",
        });
      } else {
        const result = await uploadFile(req.file);
        await unlinkFile(req.file.path);

        let set = {};
        set["filename"] = result.Location;
        await Listing.updateMany({ email: email }, { $set: set });

        User.findByIdAndUpdate(user._id, {
          filename: result.Location,
        }).then(function () {
          User.findOne({ email: req.query.email }).then(function (storedUser) {
            storedUser.save(() => {
              res.json({ newImage: result.Location });
            });
          });
        });
      }
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

router.post("/upload-locum", async (req, res) => {
  upload(req, res, async (err) => {
    const email = req.query.email;
    const locum = await Newsletter.findOne({ email });

    if (req.file === undefined) {
      res.json({
        invalid: "No files or file not accepted or file size exceeds limit.",
      });
    } else {
      const result = await uploadFile(req.file);
      await unlinkFile(req.file.path);

      let set = {};
      set["photo"] = req.file.filename;

      Newsletter.findByIdAndUpdate(locum._id, {
        filename: result.Location,
      }).then(function () {
        Newsletter.findOne({ email: req.query.email }).then(function (
          storedLocum
        ) {
          storedLocum.save(() => {
            res.json({ newImage: result.Location });
          });
        });
      });
    }
  });
});

//=========== GET ALLUSERS PAGE (From Ausers.js) ==============
router.get("/allusers", async (req, res) => {
  User.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }
    let match = {};

    // Start and Finish Dates
    if (req.query.startDate && req.query.finishDate) {
      const start = req.query.startDate;
      const finish = new Date(req.query.finishDate);
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }
    const total = await User.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(total / perPage);
    const page =
      req.query.page && total > perPage ? parseInt(req.query.page) : 1;
    console.log(match, "match");

    const blacklisted = await User.find({ isActive: false }).countDocuments();

    try {
      const users = await User.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        users: users,
        total: total,
        page: page,
        maxPage: maxPage,
        sort: sort,
        blacklisted: blacklisted,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//======== SORT (From Ausers.js) ==========
router.get("/sortusers", async (req, res) => {
  User.paginate({}, {}).then(async (result) => {
    const thisSort = {};

    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let match = {};

    // Location (STATE)
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    // Start and Finish Dates
    if (req.query.startDate && req.query.finishDate) {
      const start = req.query.startDate;
      const finish = new Date(req.query.finishDate);
      finish.setDate(finish.getDate() + 1);
      match["createdAt"] = { $gte: start, $lt: finish };
    }
    // ALL THE VARIOUS SORTS

    if (req.query.name === "Name") {
      thisSort["firstName"] = sort;
    }

    if (req.query.name === "Email") {
      thisSort["email"] = sort;
    }

    if (req.query.name === "Phone") {
      thisSort["phone"] = sort;
    }

    if (req.query.name === "Survey") {
      thisSort["survey"] = sort;
    }

    if (req.query.name === "Is Admin") {
      thisSort["isAdmin"] = sort;
    }
    if (req.query.name === "Address") {
      thisSort["postalCode"] = sort;
    }
    if (req.query.name === "Blacklist") {
      thisSort["isActive"] = sort;
    }

    const total = await User.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(total / perPage);

    const page =
      req.query.page && total > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");

    const blacklisted = await User.find({ isActive: false }).countDocuments();

    try {
      const users = await User.find(match)
        .sort(thisSort)
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        users: users,
        total: total,
        page: page,
        maxPage: maxPage,
        sort: sort,
        blacklisted: blacklisted,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

//=========== GET ALL LOCUMS PAGE (from ALocums.js) ===========
router.get("/alllocums", async (req, res) => {
  Newsletter.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let match = {};

    if (req.query.startDate && req.query.finishDate) {
      const start = req.query.startDate;
      const finish = new Date(req.query.finishDate);
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }
    const total = await Newsletter.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(total / perPage);
    const page =
      req.query.page && total > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const briefs = await Newsletter.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        briefs: briefs,
        total: total,
        page: page,
        maxPage: maxPage,
        sort: sort,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

// ============== HIDE LOCUM (from Alocums.js) ============
router.put("/hideme/:id", async (req, res) => {
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }
  let num = await Newsletter.find({ showLocum: true }).countDocuments();

  let total = await Newsletter.find().countDocuments();

  let perPage = 25;
  let maxPage = Math.ceil(total / perPage);
  const page = req.query.page && total > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedUser = await Newsletter.updateOne(
      { locumId: req.params.id },
      { showLocum: req.body.showLocum }
    );

    const allLocums = await Newsletter.find()
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      storedUser: storedUser,
      num: num,
      total: total,
      allLocums: allLocums,
      page: page,
      maxPage: maxPage,
      sort: sort,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//============ GET ALISTING.JS ==============
router.get("/listings", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let isActiveJob = JSON.parse(req.query.isActiveJob);
    let isDeletedJob = JSON.parse(req.query.isDeletedJob);

    let match = { isActiveJob, isDeletedJob };

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

    // Location (STATE )
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    // IS ACTIVE JOB (NOT PAUSED)
    if (isActiveJob === false) {
      delete match["isActiveJob"];
    } else {
      match["isActiveJob"] === isActiveJob;
    }

    // IS DELETED JOB
    if (isDeletedJob === false) {
      match["isDeletedJob"] === isDeletedJob;
    } else {
      delete match["isDeletedJob"];
    }

    // Start and Finish Dates
    if (req.query.startDate && req.query.finishDate) {
      const finish = new Date(req.query.finishDate);

      const start = req.query.startDate;
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }

    const num = await Listing.find(match).countDocuments();

    const noOfCases = await Listing.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const adPosts = await Listing.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        adPosts: adPosts,
        noOfCases: noOfCases,
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

// ================ HIDE LISTING (from Alistings.js) ===========
router.put("/sleepAd/:slug", async (req, res) => {
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }

  let isActiveJob = JSON.parse(req.query.isActiveJob);
  let isDeletedJob = JSON.parse(req.query.isDeletedJob);

  let match = { isActiveJob, isDeletedJob };

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

  // Location (STATE)
  if (req.query.location !== "") {
    const breakLocation = req.query.location;
    const stateArr = breakLocation.split(",");
    match["state"] = stateArr;
  }

  // IS ACTIVE JOB (NOT PAUSED)
  if (isActiveJob === false) {
    delete match["isActiveJob"];
  } else {
    match["isActiveJob"] === isActiveJob;
  }

  // IS DELETED JOB
  if (isDeletedJob === false) {
    match["isDeletedJob"] === isDeletedJob;
  } else {
    delete match["isDeletedJob"];
  }

  // Start and Finish Dates
  if (req.query.startDate && req.query.finishDate) {
    const finish = new Date(req.query.finishDate);

    const start = req.query.startDate;
    finish.setDate(finish.getDate() + 1);

    match["createdAt"] = { $gte: start, $lt: finish };
  }

  const num = await Listing.find().countDocuments();

  let perPage = 25;
  let maxPage = Math.ceil(num / perPage);
  const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedUser = await Listing.updateOne(
      { slug: req.params.slug },
      { isActiveJob: req.body.isActiveJob }
    );

    const listings = await Listing.find(match)
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      storedUser: storedUser,
      listings: listings,
      sort: sort,
      maxPage: maxPage,
      page: page,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//======== SORT (From Alistings.JS) ==========
router.get("/sortcase", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    const thisSort = {};

    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let isActiveJob = JSON.parse(req.query.isActiveJob);
    let isDeletedJob = JSON.parse(req.query.isDeletedJob);

    let match = { isActiveJob, isDeletedJob };

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

    // Location (STATE )
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    // IS ACTIVE JOB (NOT PAUSED)
    if (isActiveJob === false) {
      delete match["isActiveJob"];
    } else {
      match["isActiveJob"] === isActiveJob;
    }

    // IS DELETED JOB
    if (isDeletedJob === false) {
      match["isDeletedJob"] === isDeletedJob;
    } else {
      delete match["isDeletedJob"];
    }

    if (req.query.startDate && req.query.finishDate) {
      const finish = new Date(req.query.finishDate);

      const start = req.query.startDate;
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }
    // ALL THE VARIOUS SORTS
    if (req.query.name === "Case ID") {
      thisSort["caseId"] = sort;
    }
    if (req.query.name === "Contract Type") {
      thisSort["contractType"] = sort;
    }

    if (req.query.name === "Professions") {
      thisSort["professions"] = sort;
    }

    if (req.query.name === "Publisher Name") {
      thisSort["firstName"] = sort;
    }

    if (req.query.name === "Live | Pause") {
      thisSort["isActiveJob"] = sort;
    }

    if (req.query.name === "Email") {
      thisSort["email"] = sort;
    }

    if (req.query.name === "Status") {
      thisSort["isDeletedJob"] = sort;
    }
    if (req.query.name === "Date Listed") {
      thisSort["createdAt"] = sort;
    }

    if (req.query.name === "Listing Address") {
      thisSort["postalCode"] = sort;
    }

    const num = await Listing.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const adPosts = await Listing.find(match)
        .sort(thisSort)
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        adPosts: adPosts,
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

//============ SORT (from Alocumlistings.js)==============
router.get("/locumsonly", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let isActiveJob = JSON.parse(req.query.isActiveJob);
    let isDeletedJob = JSON.parse(req.query.isDeletedJob);

    let match = { isActiveJob, isDeletedJob, contractType: "Locum" };

    // Location (STATE )
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    // IS ACTIVE JOB (NOT PAUSED)
    if (isActiveJob === false) {
      delete match["isActiveJob"];
    } else {
      match["isActiveJob"] === isActiveJob;
    }

    // IS DELETED JOB
    if (isDeletedJob === false) {
      match["isDeletedJob"] === isDeletedJob;
    } else {
      delete match["isDeletedJob"];
    }

    if (req.query.startDate && req.query.finishDate) {
      const finish = new Date(req.query.finishDate);

      const start = req.query.startDate;
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }

    const num = await Listing.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const adPosts = await Listing.find(match)
        .sort({ createdAt: sort })
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        adPosts: adPosts,
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

//======== SORT (From Alocumlistings.JS) ==========
router.get("/sortlocumcase", async (req, res) => {
  Listing.paginate({}, {}).then(async (result) => {
    const thisSort = {};

    let sort = req.query.sortBy;
    if (sort === undefined || sort === "") {
      sort = -1;
    }

    let isActiveJob = JSON.parse(req.query.isActiveJob);
    let isDeletedJob = JSON.parse(req.query.isDeletedJob);

    let match = { isActiveJob, isDeletedJob, contractType: "Locum" };

    // Location (STATE )
    if (req.query.location !== "") {
      const breakLocation = req.query.location;
      const stateArr = breakLocation.split(",");
      match["state"] = stateArr;
    }

    // IS ACTIVE JOB (NOT PAUSED)
    if (isActiveJob === false) {
      delete match["isActiveJob"];
    } else {
      match["isActiveJob"] === isActiveJob;
    }

    // IS DELETED JOB
    if (isDeletedJob === false) {
      match["isDeletedJob"] === isDeletedJob;
    } else {
      delete match["isDeletedJob"];
    }

    if (req.query.startDate && req.query.finishDate) {
      const finish = new Date(req.query.finishDate);

      const start = req.query.startDate;
      finish.setDate(finish.getDate() + 1);

      match["createdAt"] = { $gte: start, $lt: finish };
    }
    // ALL THE VARIOUS SORTS
    if (req.query.name === "Case ID") {
      thisSort["caseId"] = sort;
    }
    if (req.query.name === "Status") {
      thisSort["isPaidLocum"] = sort;
    }

    if (req.query.name === "Professions") {
      thisSort["professions"] = sort;
    }

    if (req.query.name === "Stay") {
      thisSort["accommodation"] = sort;
    }

    if (req.query.name === "Flight") {
      thisSort["airtravel"] = sort;
    }
    if (req.query.name === "Road") {
      thisSort["roadtravel"] = sort;
    }
    if (req.query.name === "Rate") {
      thisSort["normal_rate"] = sort;
    }
    if (req.query.name === "Start Date") {
      thisSort["startDate"] = sort;
    }
    if (req.query.name === "Finish Date") {
      thisSort["finishDate"] = sort;
    }

    if (req.query.name === "Live | Pause") {
      thisSort["isActiveJob"] = sort;
    }

    if (req.query.name === "Status") {
      thisSort["isDeletedJob"] = sort;
    }
    if (req.query.name === "Date Listed") {
      thisSort["createdAt"] = sort;
    }

    const num = await Listing.find(match).countDocuments();

    let perPage = 25;
    let maxPage = Math.ceil(num / perPage);

    const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;

    console.log(match, "match");
    try {
      const adPosts = await Listing.find(match)
        .sort(thisSort)
        .skip((page - 1) * perPage)
        .limit(perPage);

      res.status(200).json({
        adPosts: adPosts,

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

// ================ HIDE LISTING (from Alistings.js) ===========
router.put("/locumSleepAd/:slug", async (req, res) => {
  let sort = req.query.sortBy;
  if (sort === undefined || sort === "") {
    sort = -1;
  }

  let isActiveJob = JSON.parse(req.query.isActiveJob);
  let isDeletedJob = JSON.parse(req.query.isDeletedJob);
  let match = { isActiveJob, isDeletedJob, contractType: "Locum" };

  // Location (STATE)
  if (req.query.location !== "") {
    const breakLocation = req.query.location;
    const stateArr = breakLocation.split(",");
    match["state"] = stateArr;
  }

  // IS ACTIVE JOB (NOT PAUSED)
  if (isActiveJob === false) {
    delete match["isActiveJob"];
  } else {
    match["isActiveJob"] === isActiveJob;
  }

  // IS DELETED JOB
  if (isDeletedJob === false) {
    match["isDeletedJob"] === isDeletedJob;
  } else {
    delete match["isDeletedJob"];
  }

  // Start and Finish Dates
  if (req.query.startDate && req.query.finishDate) {
    const finish = new Date(req.query.finishDate);

    const start = req.query.startDate;
    finish.setDate(finish.getDate() + 1);

    match["createdAt"] = { $gte: start, $lt: finish };
  }

  const num = await Listing.find().countDocuments();

  let perPage = 25;
  let maxPage = Math.ceil(num / perPage);
  const page = req.query.page && num > perPage ? parseInt(req.query.page) : 1;
  try {
    const storedUser = await Listing.updateOne(
      { slug: req.params.slug },
      { isActiveJob: req.body.isActiveJob }
    );

    const listings = await Listing.find(match)
      .sort({ createdAt: sort })
      .skip((page - 1) * perPage)
      .limit(perPage);

    res.send({
      storedUser: storedUser,
      listings: listings,
      sort: sort,
      maxPage: maxPage,
      page: page,
    });
  } catch (err) {
    res.status(400).json({ err });
  }
});

//============ GET ADMIN DASHBOARD ==============
//from Admin dashboard
router.get("/dashboard/:email", async (req, res) => {
  try {
    const admin = await User.findOne({ email: req.params.email });
    const noOfUsers = await User.find({ isActive: true }).countDocuments();

    // ============= LOCUMS =================

    const activeLocum = await Newsletter.find({
      showLocum: true,
    }).countDocuments();
    const inactiveLocum = await Newsletter.find({
      showLocum: false,
    }).countDocuments();

    const noOfLocums = await Newsletter.find({
      isLocum: true,
    }).countDocuments();

    const nswLocum = await Newsletter.find({ state: "NSW" }).countDocuments();
    const vicLocum = await Newsletter.find({
      state: "VIC",
    }).countDocuments();
    const qldLocum = await Newsletter.find({
      state: "QLD",
    }).countDocuments();
    const waLocum = await Newsletter.find({
      state: "WA",
    }).countDocuments();
    const ntLocum = await Newsletter.find({
      state: "NT",
    }).countDocuments();
    const saLocum = await Newsletter.find({
      state: "SA",
    }).countDocuments();
    const tasLocum = await Newsletter.find({
      state: "TAS",
    }).countDocuments();
    const actLocum = await Newsletter.find({
      state: "ACT",
    }).countDocuments();

    // ============= LISTINGS =================

    const activeList = await Listing.find({
      isActiveJob: true,
    }).countDocuments();
    const inactiveList = await Listing.find({
      isActiveJob: false,
      isDeletedJob: false,
    }).countDocuments();

    const expiredList = await Listing.find({
      isActiveJob: false,
      isDeletedJob: true,
    }).countDocuments();

    const nsw = await Listing.find({
      state: "NSW",
      isDeletedJob: false,
    }).countDocuments();
    const vic = await Listing.find({
      state: "VIC",
      isDeletedJob: false,
    }).countDocuments();
    const qld = await Listing.find({
      state: "QLD",
      isDeletedJob: false,
    }).countDocuments();
    const tas = await Listing.find({
      state: "TAS",
      isDeletedJob: false,
    }).countDocuments();
    const sa = await Listing.find({
      state: "SA",
      isDeletedJob: false,
    }).countDocuments();
    const act = await Listing.find({
      state: "ACT",
      isDeletedJob: false,
    }).countDocuments();
    const nt = await Listing.find({
      state: "NT",
      isDeletedJob: false,
    }).countDocuments();
    const wa = await Listing.find({
      state: "WA",
      isDeletedJob: false,
    }).countDocuments();

    // ============= APPLICATIONS =================

    res.status(200).json({
      admin: admin,
      activeLocum: activeLocum,
      inactiveLocum: inactiveLocum,
      nswLocum: nswLocum,
      qldLocum: qldLocum,
      waLocum: waLocum,
      ntLocum: ntLocum,
      noOfLocums: noOfLocums,
      inactiveList: inactiveList,
      activeList: activeList,
      expiredList: expiredList,
      nsw: nsw,
      vic: vic,
      qld: qld,
      sa: sa,
      nt: nt,
      wa: wa,
      act: act,
      sa: sa,
      tas: tas,
      noOfUsers: noOfUsers,
      actLocum: actLocum,
      nswLocum: nswLocum,
      vicLocum: vicLocum,
      qldLocum: qldLocum,
      tasLocum: tasLocum,
      saLocum: saLocum,
      ntLocum: ntLocum,
      waLocum: waLocum,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//=========== ADMIN VIEW USER ============

router.get("/users/:id", async (req, res) => {
  const user = await User.findById({ _id: req.params.id });

  if (user === null) {
    res.redirect(process.env.FRONTEND_URL);
  } else {
    res.redirect(process.env.FRONTEND_URL + "adminusers/" + user._id);
  }
});

// ============= ADMIN VIEW Locum =================
router.get("/locumProfile/:locumId", async (req, res) => {
  const locum = await Newsletter.findOne({ locumId: req.params.locumId });

  if (locum) {
    res.redirect(process.env.FRONTEND_URL + "adminlocum/" + locum.locumId);
  }
});

//============ ADMIN GET LOCUM  ==============
router.get("/profile/:locumId", async (req, res) => {
  try {
    const user = await Newsletter.findOne({ locumId: req.params.locumId });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ============== PREVIEW CV ===============
router.get("/resume/:locumId", async (req, res) => {
  const locum = await Newsletter.findOne({ locumId: req.params.locumId });

  if (locum === null) {
    res.redirect(process.env.FRONTEND_URL);
  } else {
    res.redirect(
      process.env.FRONTEND_URL + "adminresume/" + req.params.locumId
    );
  }
});

//============ GET LOCUM PROFILE (from Aresume.js) ==============
router.get("/profileResume/:locumId", async (req, res) => {
  try {
    const user = await Newsletter.findOne({ locumId: req.params.locumId });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ============== PREVIEW CV ===============
router.get("/listingedit/:slug", async (req, res) => {
  const listing = await Listing.findOne({ slug: req.params.slug });

  if (listing.contractType === "Locum") {
    res.redirect(
      process.env.FRONTEND_URL + "adminlistingedit/" + req.params.slug
    );
  } else {
    res.redirect(
      process.env.FRONTEND_URL + "adminlistingeditreg/" + req.params.slug
    );
  }
});

//============ GET HOMEPAGE DATA ==============
//from homepage and Dashboard
router.get("/homepage", async (req, res) => {
  try {
    const noOfCases = await Listing.find({
      isActiveJob: true,
    }).countDocuments();

    const noOfUsers = await User.findOne({}).countDocuments();

    const plans = await Homepage.findOne({ isAdmin: true });

    res.status(200).json({
      noOfCases: noOfCases,
      noOfUsers: noOfUsers,
      plans: plans,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/homepage", async (req, res, next) => {
  try {
    if (req.body._id !== "") {
      Homepage.findByIdAndUpdate(req.body._id, req.body).then(function () {
        Homepage.findById(req.body._id).then(function (savedPlan) {
          savedPlan.save();
          res.send(savedPlan);
        });
      });
    } else {
      // Generate local timeone for MongoDB
      let dt = new Date();
      dt = dt.setMinutes(dt.getMinutes() - dt.getTimezoneOffset());

      const homepage = new Homepage({
        createdAt: dt,
        messageOn: req.body.messageOn,
        messageToAll: req.body.messageToAll,
      });
      const savedPlan = await homepage.save();

      res.send(savedPlan);
    }
  } catch (err) {
    res.status(400).json({ err });
  }
});

//========== GET PAYMENT PLANS DATA (from Apayments.js) =========
router.get("/storedInfo", async (req, res) => {
  try {
    const plans = await Homepage.findOne({ isAdmin: true });
    res.status(200).json(plans);
  } catch (err) {
    res.status(500).json(err);
  }
});

//=========== VIEW OR REDIRECT TO AD DETAILS ============
// (from Asearchlist.js)
//View by Slug Number page
router.get("/adPosts/:slug", async (req, res) => {
  const post = await Listing.findOne({ slug: req.params.slug });

  if (post.contractType === "Locum") {
    res.redirect(
      process.env.FRONTEND_URL + "admin_post_locum/" + req.params.slug
    );
  } else {
    res.redirect(
      process.env.FRONTEND_URL + "admin_post_std/" + req.params.slug
    );
  }
});

module.exports = router;
