const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const homepageSchema = new mongoose.Schema(
  {
    isAdmin: {
      type: Boolean,
      default: true,
    },
    heroBanner: {
      type: String,
    },
    messageOn: {
      type: Boolean,
      default: false,
    },
    titleOfMessage: {
      type: String,
    },
    messageToAll: {
      type: String,
    },
  },
  { timestamps: true }
);

homepageSchema.plugin(mongoosePaginate);

const homepageModel = mongoose.model("homepages", homepageSchema);
module.exports = homepageModel;
