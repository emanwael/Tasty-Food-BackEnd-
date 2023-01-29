const mongoose = require('mongoose');

const customerShema= new mongoose.Schema({
    customer_name:String,
    customer_img:String,
    address:String,
    phone_number:String,
    email:String,
    favourite_orders:[
        {
       restaurant:{type:Number},
       meal: {type:mongoose.Schema.Types.ObjectId,ref:'meals'}
    },
]
   
});
const customersModel=mongoose.model("customers",customerShema);
module.exports=customersModel;