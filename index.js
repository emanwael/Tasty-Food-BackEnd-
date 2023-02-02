const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL =
  "mongodb+srv://israa:1234@cluster0.xtb3nbi.mongodb.net/talabat";

const mealsRoute = require("./routes/meals");
const customersRoute = require("./routes/customers");
const ordersRoute = require("./routes/orders");
const restaurantsRoute = require("./routes/restaurants");
const analysisRoute = require("./routes/restaurant_analysis");
const restaurantAdminRoute = require("./routes/restaurant_admins");

const PORT = 5100;
const app = express();

mongoose.connect(MONGO_URL, (err) => {
  if (!err) return console.log(`connect done`);
  console.log("error==========");
});
app.listen(PORT, (err) => {
  if (!err) return console.log(`server start at port ${PORT}`);
  console.log(err);
});
app.use(express.json());

app.use("/meals", mealsRoute);
app.use("/customers", customersRoute);
app.use("/orders", ordersRoute);
app.use("/restaurants", restaurantsRoute);
app.use("/analysis", analysisRoute);
app.use("/restaurant-admins", restaurantAdminRoute);
