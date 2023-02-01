const mongoose = require("mongoose");

const analysisSchema = mongoose.Schema({
  restaurant_id: { type: mongoose.Types.ObjectId, ref: "restaurants" },
  total_orders: { type: Number },
  meals_orders: {
    type: [
      {
        meal_id: { type: mongoose.Types.ObjectId, ref: "meals" },
        number_of_orders: { type: Number },
      },
    ],
  },
});

const analysisModel = mongoose.model("restaurant_analysis ", analysisSchema);
module.exports = analysisModel;
