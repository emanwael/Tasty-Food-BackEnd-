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
async function addItemToMenu(restaurantId, itemId, food_group) {
  try {
    let mealExist = false;
    let restaurant = await getRestaurantById(restaurantId);
    restaurant.menu.push(itemId);
    restaurant.meals.forEach((meal) => {
      if (meal == food_group) mealExist = true;
    });
    if (!mealExist) {
      restaurant.meals.push(food_group);
    }
    restaurant = await updateRestaurant(restaurantId, restaurant);
  } catch (error) {
    console.log(error);
  }
}
async function deleteItemFromMenu(restaurantId, itemId, food_group) {
  try {
    let mealExist = false;
    let restaurant = await getRestaurantById(restaurantId);
    restaurant.menu.forEach((item) => {
      if (item.food_group == food_group && item._id != itemId) mealExist = true;
    });
    if (!mealExist) {
      restaurant.meals = restaurant.meals.filter((meal) => {
        if (meal != food_group) return meal;
      });
    }
    restaurant = await updateRestaurant(restaurantId, restaurant);
    return restaurant.meals;
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
  deleteItemFromMenu,
  deleteRestaurant,
};
