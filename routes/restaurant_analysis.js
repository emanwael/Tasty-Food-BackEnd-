const express = require("express");
const mongoose = require("mongoose");
const analysisModel = require("../models/restaurant_analysis");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const getAllAnalysis = await analysisModel.find({});
    res.json(getAllAnalysis);
  } catch (error) {
    res.json({ Err: "Resturant Analysis DataBase ERRORR" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const analysis = await analysisModel.findById(req.params.id);
    res.json(analysis);
  } catch (error) {
    res.json({ Err: "Resturant Analysis DataBase ERRORR" });
  }
});

router.post("/", async (req, res) => {
  const analysis = new analysisModel(req.body);

  try {
    const savedAnalysis = await meal.save();
    res.json(savedAnalysis);
  } catch (error) {
    res.json({ Err: "Resturant Analysis DataBase ERRORR" });
  }
});

router.put("/:id", async(req,res)=>{
    const id = req.params.id;
    const body = req.body;
    try {
        const updatedAnalysis = await analysisModel.findByIdAndUpdate(id,body,{new:true})
        res.json(updatedAnalysis);
    } catch (error) {
        res.json({ Error: "Resturant Analysis DataBase ERRORR"});
    }

 });

 router.delete("/:id", async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedAnalysis= await analysisModel.findByIdAndDelete(id)
        res.json(deletedAnalysis);
    } catch (error) {
        res.json({ Error: "Resturant Analysis DataBase ERRORR"});
    }
 });

module.exports = router;
