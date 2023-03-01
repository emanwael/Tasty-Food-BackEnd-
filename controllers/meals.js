const mealsModel = require("../models/meals");
const { cloudinary } = require("../config/cloudinary");

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
    return await mealsModel.findByIdAndUpdate(mealId, meal);
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
        return await mealsModel.create(meal);
      })
      .catch((err) => console.log(err));
  } catch (error) {
    console.log(error);
  }
}

async function deleteMealById(MealId) {
  try {
    return await mealsModel.findByIdAndDelete(MealId);
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
