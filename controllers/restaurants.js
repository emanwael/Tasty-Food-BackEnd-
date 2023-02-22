const RestaurantsModel = require("../models/restaurants");

async function getAllRestaurants() {
  try {
    return await RestaurantsModel.find({});
  } catch (error) {
    return error;
  }
}
async function getRestaurantById(restaurantId) {
  try {
    return await RestaurantsModel.findById(restaurantId).populate("menu");
  } catch (error) {
    return error;
  }
}
async function createRestaurant(restaurantData) {
  try {
    return await RestaurantsModel.create(restaurantData);
  } catch (error) {
    return error;
  }
}
async function updateRestaurant(restaurantId, restaurantData) {
  try {
    return await RestaurantsModel.findByIdAndUpdate(
      restaurantId,
      restaurantData,
      {
        new: true,
      }
    );
  } catch (error) {
    return error;
  }
}
async function deleteRestaurant(restaurantId) {
  try {
    return await RestaurantsModel.findByIdAndDelete(restaurantId);
  } catch (error) {
    return error;
  }
}

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
