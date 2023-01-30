const express = require("express");
const mongoose = require("mongoose");
const restaurantAdminModel = require("../model/restaurant_admins");

const router = express.Router();
router.use(express.json());

// Get Restaurant Admin
router.get("/", async (req, res) => {
  try {
    const restaurantAdmin = await restaurantAdminModel.find({});
    res.json(restaurantAdmin);
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

// Get Restaurant Admin by ID
router.get("/:id", async (req, res) => {
  try {
    const restaurantAdmin = await restaurantAdminModel.findById(req.params.id);
    res.json(restaurantAdmin);
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

// Add Restaurant Admin
router.post("/", async (req, res) => {
  try {
    const saveRestaurantAdmin = await restaurantAdminModel.save();
    res.json(saveRestaurantAdmin);
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

// Edit Restaurant Admin by ID
router.put("/:id", async (req, res) => {
  try {
    const ubdateRestaurantAdmin = await restaurantAdminModel.updateOne(
      { _id: req.params.id },
      req.body
    );
    return res.send("Restaurant Admins Data Updates Done!");
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

// Edit Restaurant Admin
router.patch("/:id", async (req, res) => {
  try {
    const restaurantAdmin = await restaurantAdminModel.updateOne(
      { _id: req.params.id },
      req.body
    );
    return res.send("Restaurant Admins Data is updated Successfully!");
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

// Delete Restaurant Admin by ID
router.delete("/:id", async (req, res) => {
  try {
    const restaurantAdmin = await restaurantAdminModel.deleteOne({
      _id: req.params.id,
    });
    return res.send("Restaurant Admins Data is deleted Successfully!");
  } catch (error) {
    res.json({ Error: "Error in Database Connection!!" });
  }
});

module.exports = router;
