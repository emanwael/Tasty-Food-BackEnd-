const mongoose = require("mongoose");

const analysisSchema = new mongoose.Schema({
    restaurant_id:Number,
    total_orders:Number,
    meals_orders: [
          {
            meal_id: Number,
            number_of_orders: Number
          },
        ]     
}) 

const analysisModel = mongoose.model('analysis',analysisSchema);
module.exports = analysisModel;