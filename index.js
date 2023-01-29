const express = require("express");
const mongoose = require("mongoose");
const MONGO_URL = "mongodb+srv://eman_ali:1234@cluster0.xtb3nbi.mongodb.net/talabat";

const mealsRoute = require('./routes/meals') ;
const customersRoute=require('./routes/customers');

const PORT = 5100;
const app =express();

mongoose.connect(MONGO_URL,(err)=>{
    if(!err) return console.log(`connect done`);
    console.log("error==========");  
});
app.listen(PORT,(err)=>{
    if(!err) return console.log(`server start at port ${PORT}`);
     console.log(err);  
 })
app.use(express.json());

app.use('/meals',mealsRoute);
app.use('/customers',customersRoute)



