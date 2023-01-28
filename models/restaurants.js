const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  restaurant_name: { type: String, required: true },
  logo: { type: String, required: true }, ////////////!
  meals: { type: [mongoose.Types.ObjectId] },
  branches: {
    type: [
      {
        branch_name: { type: String, required: true },
        address: { type: String, required: true },
        location: { type: String, required: true },
      },
    ],
  },
  reviews: {
    type: [
      {
        user: { type: mongoose.Types.ObjectId, required: true },
        rate: { type: Number, required: true },
        feedback: { type: String, required: true },
      },
    ],
  },
  delivery_time: { type: Number },
  rate: {
    type: {
      rate: { type: Number, required: true },
      number_of_ratings: { type: number, required: true },
    },
  },
  account_number: { type: number, required: true },
  phone_number: { type: [number], required: true },
  payment_method: { type: [String], required: true },
  opened: {
    type: {
      from: { type: String, required: true },
      to: { type: String, required: true },
    },
    required: true,
  },
  menu: { type: [mongoose.Types.ObjectId] },
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
