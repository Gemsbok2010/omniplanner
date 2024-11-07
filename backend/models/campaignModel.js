const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const campaignSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      min: 2,
      max: 255,
    },
    lastName: {
      type: String,
      min: 2,
      max: 255,
    },
    email: {
      type: String,
    },
    category: {
      type: String,
    },
    campaignName: {
      type: String,
    },
    description: {
      type: String,
    },
    examples: {
      type: String,
    },
    rationale: {
      type: String,
    },
    budget: {
      type: String,
    },
    noDays: {
      type: Number,
    },
    planDays: {
      type: Number,
    },
    market: {
      type: Array,
      default: [],
    },
    toMarket: {
      type: Array,
      default: [],
    },
    season: {
      type: Array,
      default: [],
    },
    desktop: {
      type: Boolean,
      default: false,
    },
    mobweb: {
      type: Boolean,
      default: false,
    },
    mobileApp: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: true,
    },
    brandings: {
      type: Array,
      default: [],
    },
    revenues: {
      type: Array,
      default: [],
    },
    sales: {
      type: Array,
      default: [],
    },
    aquisitions: {
      type: Array,
      default: [],
    },
    reengagements: {
      type: Array,
      default: [],
    },
    loyaltypoints: {
      type: Array,
      default: [],
    },
    conversions: {
      type: Array,
      default: [],
    },
    secRevenues: {
      type: Array,
      default: [],
    },
    secRevenue: {
      type: Boolean,
      default: false,
    },
    secSales: {
      type: Array,
      default: [],
    },
    secSale: {
      type: Boolean,
      default: false,
    },
    secaquisitions: {
      type: Array,
      default: [],
    },
    secAqui: {
      type: Boolean,
      default: false,
    },
    secReengagements: {
      type: Array,
      default: [],
    },
    secreeng: {
      type: Boolean,
      default: false,
    },
    secloyaltypoints: {
      type: Array,
      default: [],
    },
    secloyalty: {
      type: Boolean,
      default: false,
    },
    secconversions: {
      type: Array,
      default: [],
    },
    secconv: {
      type: Boolean,
      default: false,
    },
    newsletter: {
      type: Boolean,
      default: false,
    },
    facebook: {
      type: Boolean,
      default: false,
    },
    twitter: {
      type: Boolean,
      default: false,
    },
    youtube: {
      type: Boolean,
      default: false,
    },
    linkedin: {
      type: Boolean,
      default: false,
    },
    instagram: {
      type: Boolean,
      default: false,
    },
    weibo: {
      type: Boolean,
      default: false,
    },
    wechat: {
      type: Boolean,
      default: false,
    },
    threads: {
      type: Boolean,
      default: false,
    },
    tiktok: {
      type: Boolean,
      default: false,
    },
    loyalty: {
      type: Array,
      default: [],
    },
    discount: {
      type: Array,
      default: [],
    },
    gratuity: {
      type: Array,
      default: [],
    },
    prizeOffers: {
      type: Boolean,
    },
    noOffer: {
      type: Boolean,
    },
    pauseCampaign: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
campaignSchema.plugin(mongoosePaginate);
const campaignModel = mongoose.model("campaigns", campaignSchema);
module.exports = campaignModel;
