const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
const moment = require("moment");

const briefSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
    },
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
    startDate: {
      type: String,
    },
    endDate: {
      type: String,
    },
    type: {
      type: String,
    },
    campaignName: {
      type: String,
    },
    noDays: {
      type: String,
    },
    expiryDate: {
      type: Date,
    },
    created_date: {
      type: String,
    },
    description: {
      type: String,
    },
    status: {
      type: String,
    },
    // ONLINE
    jordan: {
      type: Boolean,
    },
    egypt: {
      type: Boolean,
    },
    uae: {
      type: Boolean,
    },
    turkiye: {
      type: Boolean,
    },
    india: {
      type: Boolean,
    },
    pakistan: {
      type: Boolean,
    },
    bangladesh: {
      type: Boolean,
    },
    france: {
      type: Boolean,
    },
    germany: {
      type: Boolean,
    },
    uk: {
      type: Boolean,
    },
    ksa: {
      type: Boolean,
    },
    thailand: {
      type: Boolean,
    },
    market: {
      type: [],
    },
    onlineMarkets: {
      type: Boolean,
    },
    allmarkets: {
      type: Boolean,
    },
    // OFFLINE

    offlineMarkets: {
      type: Boolean,
    },
    offlineMarket: {
      type: [],
    },
    offallmarkets: {
      type: Boolean,
    },
    offjordan: {
      type: Boolean,
    },
    offegypt: {
      type: Boolean,
    },
    offuae: {
      type: Boolean,
    },
    offturkiye: {
      type: Boolean,
    },
    offindia: {
      type: Boolean,
    },
    offpakistan: {
      type: Boolean,
    },
    offbangladesh: {
      type: Boolean,
    },
    offfrance: {
      type: Boolean,
    },
    offgermany: {
      type: Boolean,
    },
    offuk: {
      type: Boolean,
    },

    offthailand: {
      type: Boolean,
    },

    offksa: {
      type: Boolean,
    },

    // PRIMARY
    primary: {
      type: String,
    },
    revenues: {
      type: [],
    },
    sales: {
      type: [],
    },
    aquisitions: {
      type: [],
    },
    reengagements: {
      type: [],
    },
    conversions: {
      type: [],
    },
    loyaltypoints: {
      type: [],
    },

    // SECONDARY
    secRevenue: {
      type: Boolean,
    },
    secRevenues: {
      type: [],
    },
    secSale: {
      type: Boolean,
    },
    secSales: {
      type: [],
    },
    secAqui: {
      type: Boolean,
    },
    secaquisitions: {
      type: [],
    },
    secreeng: {
      type: Boolean,
    },
    secReengagements: {
      type: [],
    },
    secloyalty: {
      type: Boolean,
    },
    secloyaltypoints: {
      type: [],
    },
    secconv: {
      type: Boolean,
    },
    secconversions: {
      type: [],
    },

    // PLATFORMS
    desktop: {
      type: Boolean,
    },
    channels: {
      type: [],
    },
    lpage: {
      type: Boolean,
    },
    dedicatedtile: {
      type: Boolean,
    },
    hero: {
      type: Boolean,
    },
    loadscreen: {
      type: Boolean,
    },
    destination: {
      type: Boolean,
    },
    offpage: {
      type: Boolean,
    },
    mobweb: {
      type: Boolean,
    },

    mobileApp: {
      type: Boolean,
    },
    mobChannels: {
      type: [],
    },
    splashscreen: {
      type: Boolean,
    },
    mobTile: {
      type: Boolean,
    },
    mobDestination: {
      type: Boolean,
    },
    // OFFERS
    loyaltyOffers: {
      type: Boolean,
    },

    loyalty: {
      type: [],
    },
    extraPoints: {
      type: Boolean,
    },
    tierExt: {
      type: Boolean,
    },
    statusPoints: {
      type: Boolean,
    },
    lowerTier: {
      type: Boolean,
    },
    pointsVal: {
      type: Boolean,
    },

    buyPoints: {
      type: Boolean,
    },
    mgmPoints: {
      type: Boolean,
    },
    prizeOffers: {
      type: Boolean,
    },
    noOffer: {
      type: Boolean,
    },

    gratuityOffers: {
      type: Boolean,
    },
    gratuity: {
      type: [],
    },
    compTkt: {
      type: Boolean,
    },
    companion: {
      type: Boolean,
    },

    compBag: {
      type: Boolean,
    },
    compLounge: {
      type: Boolean,
    },
    compSeat: {
      type: Boolean,
    },
    compPriority: {
      type: Boolean,
    },
    compFast: {
      type: Boolean,
    },

    compTransfer: {
      type: Boolean,
    },
    compStopover: {
      type: Boolean,
    },
    focChange: {
      type: Boolean,
    },
    discountOffers: {
      type: Boolean,
    },
    discount: {
      type: [],
    },
    airfare: {
      type: Boolean,
    },
    ancillary: {
      type: Boolean,
    },
    thirdParty: {
      type: Boolean,
    },
    stopoverDiscount: {
      type: Boolean,
    },

    fpassDiscount: {
      type: Boolean,
    },

    // CAMPAIGN REQUIREMENTS
    copybrief: {
      type: String,
    },
    mediaPlan: {
      type: Boolean,
    },
    webapp: {
      type: Boolean,
    },
    budget: {
      type: String,
    },
    tnc: {
      type: Boolean,
    },
    terms: {
      type: String,
    },
    asset: {
      type: Boolean,
    },
    creativeAssets: {
      type: String,
    },
    copy: {
      type: Boolean,
    },
    translation: {
      type: Boolean,
    },
    audience: {
      type: Boolean,
    },
    targetAudience: {
      type: String,
    },
    tracking: {
      type: Boolean,
    },
    analytics: {
      type: Boolean,
    },
    targetAnalytics: {
      type: String,
    },
    expiryDate: {
      type: Date,
    },
    created_date: {
      type: String,
    },
    showTicket: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
briefSchema.plugin(mongoosePaginate);
const briefModel = mongoose.model("brief", briefSchema);
module.exports = briefModel;
