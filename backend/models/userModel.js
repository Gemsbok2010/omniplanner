const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const userSchema = new mongoose.Schema(
  {
    isActive: {
      type: Boolean,
      default: true,
    },

    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 255,
    },
    email: {
      type: String,
      index: true,
      unique: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);
userSchema.plugin(mongoosePaginate);
const userModel = mongoose.model("rx-users", userSchema);
module.exports = userModel;
