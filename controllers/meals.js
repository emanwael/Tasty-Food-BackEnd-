const mealsModel = require("../models/meals");

async function getAllMeals() {
    try {
        return await mealsModel.find({});
    } catch (error) {
        console.log(error);
    }
}
async function getMealById(MealId) {
    try {
        return await mealsModel.findById(MealId);
    } catch (error) {
        console.log(error);
    }
}

async function updateMeal(MealId, MealData) {
    try {
        return await mealsModel.findByIdAndUpdate(MealId, MealData);
    } catch (error) {
        console.log(error);
    }
}

async function createMeals(MealData) {
    try {
        return await mealsModel.create(MealData);
    } catch (error) {
        console.log(error);
    }
}
async function deleteMealById(MealId) {
    try {
        return await mealsModel.findByIdAndDelete(MealId)
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