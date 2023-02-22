const username = "israa";
const password = "1234";
const database = "talabat";

module.exports = {
  database,
  MONGO_URL: `mongodb+srv://${username}:${password}@cluster0.xtb3nbi.mongodb.net/${database}`,
  imgBucket: "images",
};
