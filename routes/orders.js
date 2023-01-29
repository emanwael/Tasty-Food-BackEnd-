const express = require("express");
const mongoose = require("mongoose");
const ordersModel = require("../model/orders");


const router =express.Router();

router.use(express.json());

router.get('/',async (req,res)=>{

    try {
        const ordersList = await ordersModel.find({});

        res.json(ordersList);        
    } catch (error) {
        res.json({ Err: "DB_ERR" });

    }
});


router.get('/:id',async(req,res)=>{
    try {
        const order = await ordersModel.findById(req.params.id);
        res.json(order);
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });

    }
});

router.post('/',async(req,res)=>{ 
   
    const order = new ordersModel(req.body);

    try {
        const ordersave = await order.save();
        res.json(ordersave);
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }

});

router.put('/:id',async(req,res)=>{

    try {
        const order = await ordersModel.updateOne({"_id" : req.params.id},req.body);
        return res.send("update done") ;
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }

});
router.patch('/:id',async(req,res)=>{
  
    try {
        const order = await ordersModel.updateOne({"_id" : req.params.id},req.body);
        return res.send("update done") ;
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }
});

router.delete('/:id',async(req,res)=>{
    try {
        const order = await ordersModel.deleteOne({"_id" : req.params.id});
        return res.send("delete done") ;
        
    } catch (error) {
        res.json({ Err: "DB_ERR" });
    }
  
});



module.exports = router;
