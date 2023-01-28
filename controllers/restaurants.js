const RestaurantsModel = require("../models/restaurants");

async function getAllRestaurants() {
  try {
    return await RestaurantsModel.find({});
  } catch (error) {
    console.log(error);
  }
}
async function getRestaurantById(restaurantId) {
  try {
    return await RestaurantsModel.findById(restaurantId);
  } catch (error) {
    console.log(error);
  }
}
async function createRestaurant(restaurantData) {
  try {
    return await RestaurantsModel.create(restaurantData);
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
}
async function deleteRestaurant(restaurantId) {
  try {
    return await RestaurantsModel.findByIdAndDelete(restaurantId);
  } catch (error) {
    console.log(error);
  }
}

//get restaurant menu
//get restaurant menu categories

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
