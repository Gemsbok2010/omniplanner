const http = require("http");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { config } = require("./config");
require("dotenv/config");
const mongoStore = require("connect-mongo")(session);
const multer = require("multer");

const path = require("path");
const server = http.createServer(app);
const cors = require("cors");

app.use(
  session({
    secret: config.JWT_SECRET,
    saveUninitialized: false,
    resave: true,
    cookie: {
      httpOnly: false,
    },
    store: new mongoStore({
      url: process.env.DB_CONNECT,
      ttl: 1 * 24 * 60 * 60,
    }),
  })
);

//Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//Import routes
const adminRoute = require("./routes/administration");
const postsRoute = require("./routes/auth");
const usersRoute = require("./routes/authUsers");
const briefsRoute = require("./routes/authBriefs");
const listingsRoute = require("./routes/authListings");
const dashboardRoute = require("./routes/dashboard");

//Routes Middleware
app.use("/api/admin", adminRoute);
app.use("/api/auth", postsRoute);
app.use("/api/users", usersRoute);
app.use("/api/briefs", briefsRoute);
app.use("/api/listings", listingsRoute);
app.use("/api/dashboard", dashboardRoute);

const User = require("./models/userModel");

////////////////////////////////////////////////////////////////////////////

//Set Storage Engine
const storage = multer.diskStorage({
  destination: "./public/uploads/",
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
}).single("gameFile");

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

app.post("/upload", async (req, res) => {
  upload(req, res, async (err) => {
    const email = req.session.user.email;
    const user = await User.findOne({ email });
  });
});

////////////////////////////////////////////////////////////////////////////

//Assets
app.use("/assets", express.static("assets"));
app.use("/public", express.static("public"));

//Connect to DB (returns a mongoose instance)

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  },
  () => console.log("connected to database")
);

//Listening
const port = 4000;

server.listen(process.env.PORT || 4000, function () {
  console.log(`server up and running ${port}`);
});
