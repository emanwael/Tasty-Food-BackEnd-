const express = require("express");
const mongoose = require("mongoose");
const mealsModel = require("../models/meals");

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const mealsList = await mealsModel.find({});

    res.json(mealsList);
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const meal = await mealsModel.findById(req.params.id);
    res.json(meal);
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});

router.post("/", async (req, res) => {
  const meal = new mealsModel(req.body);

  try {
    const mealsave = await meal.save();
    res.json(mealsave);
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const meal = await mealsModel.updateOne({ _id: req.params.id }, req.body);
    return res.send("update done");
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const meal = await mealsModel.updateOne({ _id: req.params.id }, req.body);
    return res.send("update done");
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const meal = await mealsModel.deleteOne({ _id: req.params.id });
    return res.send("delete done");
  } catch (error) {
    res.json({ Err: "DB_ERR" });
  }
});

module.exports = router;
