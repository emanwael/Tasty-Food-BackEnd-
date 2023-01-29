const express = require("express");
const mongoose=require("mongoose");
const customersModel=require("../model/customers");

 
const router=express.Router();
router.use(express.json());

router.get('/',async (req, res) => {
    try {
        const customersList = await customersModel.find({});
        res.json(customersList);
    } catch (error) {
        res.json({ Err: "DB_ERR" })
    }

});

router.get('/:id',async (req, res) => {
    const id = req.params.id;
    try {
        const post = await customersModel.findById(id)
        res.json(post)
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }

   
});

router.post('/',async (req, res) => {

    const customer = new customersModel(req.body);
    try {
        const savedCustomer = await customer.save();
        res.json(savedCustomer);
    } catch (error) {
        res.json({ Err: "DB_ERR" })
    }

});
router.put('/:id',async(req,res)=>{

    try {
        const customer = await customersModel.updateOne({"_id" : req.params.id},req.body);
        return res.send("update done") ;
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }

});
router.patch('/:id',async (req, res) => {

    
    try {
        const customer = await customersModel.updateOne({ "_id":req.params.id },req.body )
        res.json(customer)
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }
    
});

router.delete('/:id',async(req,res)=>{
    try {
        const customer = await customersModel.deleteOne({"_id" : req.params.id});
        return res.send("delete done") ;
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }
  
});



module.exports = router;