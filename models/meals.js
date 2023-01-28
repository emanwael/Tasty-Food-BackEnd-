const mongoose = require("mongoose");


const mealsSchema = new mongoose.Schema({
    meal_name: String,
    description: String,
    price: Number,
    meal_img: String,
    food_group: String,
    is_available: Boolean
}) 


const mealsModel = mongoose.model('meals',mealsSchema);


module.exports = mealsModel;