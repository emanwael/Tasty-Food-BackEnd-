const mealsModel = require("../models/meals");
const { cloudinary } = require("../config/cloudinary");
const { addItemToMenu, deleteItemFromMenu } = require("./restaurants");
async function getAllMeals() {
  try {
    return await mealsModel.find({});
  } catch (error) {
    console.log(error);
  }
}

async function getMealById(mealId) {
  try {
    return await mealsModel.findById(mealId);
  } catch (error) {
    console.log(error);
  }
}

async function updateMeal(mealId, meal) {
  try {
    cloudinary.v2.uploader
      .upload(meal.meal_img, {
        folder: "itigp/meals/",
      })
      .then(async (result) => {
        meal.meal_img = result.secure_url;
        meal.img_id = result.public_id;
        return await mealsModel.findByIdAndUpdate(mealId, meal);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

async function createMeals(meal) {
  try {
    cloudinary.v2.uploader
      .upload(meal.meal_img, {
        folder: "itigp/meals/",
      })
      .then(async (result) => {
        meal.meal_img = result.secure_url;
        meal.img_id = result.public_id;
        let added_meal = await mealsModel.create(meal);
        let addToMenu = await addItemToMenu(
          added_meal.restaurant,
          added_meal._id,
          added_meal.food_group
        );

        return added_meal;
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

async function deleteMealById(MealId) {
  try {
    let meal = await getMealById(MealId);
    let meals = await deleteItemFromMenu(
      meal.restaurant,
      MealId,
      meal.food_group
    );
    return { deletedMeal: await mealsModel.findByIdAndDelete(MealId), meals };
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMealById,
  createMeals,
};
