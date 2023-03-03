const restaurantAdminModel = require("../models/restaurant_admins");
const { createRestaurant, deleteRestaurant } = require("./restaurants");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

async function getAllRestaurantAdmin() {
  try {
    return await restaurantAdminModel.find({});
  } catch (error) {
    console.log(error);
  }
}

async function getRestaurantAdminById(RestaurantAdminId) {
  try {
    return await restaurantAdminModel
      .findById(RestaurantAdminId)
      .populate("restaurant");
  } catch (error) {
    console.log(error);
  }
}

//? login function
async function signRestaurantAdminIn({ email, password }) {
  try {
    let admin = await restaurantAdminModel.findOne({ email });
    if (admin && (await bcrypt.compare(password, admin.password))) {
      const token = jwt.sign(
        { user_id: admin._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "4h" }
      );
      admin.token = token;
      return admin;
    } else return {};
  } catch (error) {
    console.log(error);
  }
}

//? register function
async function createRestaurantAdmin({
  email,
  password,
  restaurantName,
  branchName,
  branchAddress,
  branchLocation,
  phone,
}) {
  try {
    let admin = await restaurantAdminModel.find({ email });
    if (admin.length > 0) {
      return {};
    } else {
      let restaurant = await createRestaurant({
        restaurant_name: restaurantName,
        logo: "https://blog.nscsports.org/wp-content/uploads/2014/10/default-img.gif",
        branches: [
          {
            branch_name: branchName,
            address: branchAddress,
            location: branchLocation,
          },
        ],
        phone_number: [phone],
      });
      let encryptedPassword = await bcrypt.hash(password, 10);
      admin = await restaurantAdminModel.create({
        email,
        password: encryptedPassword,
        restaurant: restaurant._id,
      });
      const token = jwt.sign(
        { user_id: admin._id, email },
        process.env.TOKEN_KEY,
        { expiresIn: "4h" }
      );
      admin.token = token;

      return admin;
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateRestaurantAdmin(
  RestaurantAdminId,
  { password, ...RestaurantAdminData }
) {
  try {
    let encryptedPassword = await bcrypt.hash(password, 10);
    RestaurantAdminData.password = encryptedPassword;
    return await restaurantAdminModel.findByIdAndUpdate(
      RestaurantAdminId,
      RestaurantAdminData,
      { new: true }
    );
  } catch (error) {
    console.log(error);
  }
}

async function deleteRestaurantAdminById(RestaurantAdminId) {
  try {
    return await restaurantAdminModel.findByIdAndDelete(RestaurantAdminId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllRestaurantAdmin,
  getRestaurantAdminById,
  updateRestaurantAdmin,
  deleteRestaurantAdminById,
  createRestaurantAdmin,
  signRestaurantAdminIn,
};
