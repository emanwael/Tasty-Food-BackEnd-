require("dotenv").config();

module.exports = {
  database: process.env.DATABASE,
  MONGO_URL: `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.xtb3nbi.mongodb.net/${process.env.DATABASE}`,
  imgBucket: "images",
};
