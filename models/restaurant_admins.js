const mongoose = require("mongoose");

const restaurantAdminSchema = mongoose.Schema({
  email: { type: String, match: /.+@.+\.+/ },
  password: { type: String, minLength: 8 },
  restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
  token: { type: String },
});

const restaurantAdminModel = mongoose.model(
  "restaurant_admins",
  restaurantAdminSchema
);
module.exports = restaurantAdminModel;
