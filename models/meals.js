const mongoose = require("mongoose");

const mealsSchema = new mongoose.Schema({
  meal_name: { type: String },
  description: { type: String },
  price: { type: Number },
  meal_img: { type: String },
  img_id: { type: String },
  food_group: { type: String },
  is_available: { type: Boolean },
  restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
});

const mealsModel = mongoose.model("meals", mealsSchema);

module.exports = mealsModel;
