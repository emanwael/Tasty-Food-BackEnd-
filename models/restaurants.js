const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  restaurant_name: { type: String },
  logo: { type: String },
  img_id: { type: String },
  category: { type: String },
  meals: { type: [String] },
  branches: {
    type: [
      {
        branch_name: { type: String },
        address: { type: String },
        location: { type: String },
      },
    ],
  },
  reviews: {
    type: [
      {
        user: { type: mongoose.Types.ObjectId, ref: "customers" },
        rate: { type: Number },
        feedback: { type: String },
      },
    ],
  },
  delivery_time: { type: Number },
  rate: {
    type: {
      rate: { type: Number },
      number_of_ratings: { type: Number },
    },
  },
  account_number: { type: Number },
  phone_number: { type: [Number] },
  payment_method: { type: [String] },
  opened: {
    type: {
      from: { type: String },
      to: { type: String },
    },
  },
  menu: [{ type: mongoose.Types.ObjectId, ref: "meals" }],
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
