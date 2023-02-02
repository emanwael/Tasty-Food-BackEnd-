const mongoose = require("mongoose");

const customerShema = mongoose.Schema({
  customer_name: { type: String },
  customer_img: { type: String },
  address: { type: String },
  phone_number: { type: String },
  email: { type: String },
  favourite_orders: {
    type: [
      {
        restaurant: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "restaurants",
        },
        meal: { type: mongoose.Schema.Types.ObjectId, ref: "meals" },
      },
    ],
  },
});
const customersModel = mongoose.model("customers", customerShema);
module.exports = customersModel;
