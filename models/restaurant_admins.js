const mongoose = require("mongoose");

const restaurantAdminSchema = new mongoose.Schema({
  adminEmail: { type: String, unique: true, match: /.+@.+\.+/ },
  adminPassword: { type: Number, required: true, minLength: 8 },
  adminRestaurant: Number,
});

const restaurantAdminModel = mongoose.model(
  "restaurant_admins",
  restaurantAdminSchema
);
module.exports = restaurantAdminModel;
