const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const DB = require("./config/database");
require("dotenv").config();

const mealsRoute = require("./routes/meals");
const customersRoute = require("./routes/customers");
const ordersRoute = require("./routes/orders");
const restaurantsRoute = require("./routes/restaurants");
const analysisRoute = require("./routes/restaurant_analysis");
const restaurantAdminRoute = require("./routes/restaurant_admins");
const imagesRoute = require("./routes/images");

const PORT = 5100;
const app = express();

app.listen(PORT, (err) => {
  if (!err) return console.log(`Server Listening at Port Number ${PORT}`);
  else return console.log(`"Server Connection Error" ${err}`);
});

mongoose.connect(DB.MONGO_URL, (err) => {
  if (!err) {
    return console.log("Database is Connected");
  } else return console.log(`"Database Connection Error" ${err}`);
});

const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded());
app.use(express.json());

app.use("/meals", mealsRoute);
app.use("/customers", customersRoute);
app.use("/orders", ordersRoute);
app.use("/analysis", analysisRoute);
app.use("/restaurants", restaurantsRoute);
app.use("/restaurant-admins", restaurantAdminRoute);
app.use("/files", imagesRoute);
