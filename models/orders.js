const mongoose = require("mongoose");

const ordersSchema = mongoose.Schema({
  restaurant: { type: mongoose.Types.ObjectId, ref: "restaurants" },
  customer: { type: mongoose.Types.ObjectId, ref: "customers" },
  total_price: { type: Number },
  meals: {
    type: [
      {
        meal: { type: mongoose.Types.ObjectId, ref: "meals" },
        price: { type: Number },
        quantity: { type: Number },
      },
    ],
  },
  payment_method: { type: String },
});

const ordersModel = mongoose.model("orders", ordersSchema);

module.exports = ordersModel;
