const RestaurantsModel = require("../models/restaurants");

async function getAllRestaurants() {
  try {
    return await RestaurantsModel.find({}).populate("menu");
  } catch (error) {
    console.log(error);
  }
}
async function getRestaurantById(restaurantId) {
  try {
    return await RestaurantsModel.findById(restaurantId).populate("menu");
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
async function addItemToMenu(restaurantId, itemId) {
  try {
    let restaurnt = await getRestaurantById(restaurantId);
    restaurnt.menu.push(itemId);
    restaurnt = await updateRestaurant(restaurantId, restaurnt);
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

module.exports = {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  addItemToMenu,
  deleteRestaurant,
};
