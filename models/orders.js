const { default: mongoose } = require("mongoose");

const ordersSchema = new mongoose.Schema({
    restaurant: Number,
    customer: Number,
    total_price: Number,
    meals: [{meal:Number,
             price:Number,
              number_of_meals:Number},
            {
            meal:Number,
             price:Number,
              number_of_meals:Number
            }],
    payment_method: String,
}) 


const ordersModel = mongoose.model('orders',ordersSchema);


module.exports = ordersModel;