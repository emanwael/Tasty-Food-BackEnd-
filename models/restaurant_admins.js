const mongoose = require("mongoose");

const restaurantAdminSchema = mongoose.Schema({
  email: { type: String, unique: true, match: /.+@.+\.+/ },
  password: { type: Number, required: true, minLength: 8 },
  restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
});

const restaurantAdminModel = mongoose.model(
  "restaurant_admins",
  restaurantAdminSchema
);
module.exports = restaurantAdminModel;
