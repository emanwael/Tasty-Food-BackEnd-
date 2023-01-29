const express = require("express");
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurants");

router.get("/", async (req, res) => {
  return res.json(await getAllRestaurants());
});
router.get("/:id", async (req, res) => {
  return res.json(await getRestaurantById(req.params.id));
});
router.post("/", async (req, res) => {
  return res.json(await createRestaurant(req.body));
});
router.put("/:id", async (req, res) => {
  return res.json(await updateRestaurant(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  return res.json(await deleteRestaurant(req.params.id));
});

module.exports = router;
