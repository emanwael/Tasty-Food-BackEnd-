const express = require("express");
const Access = require("./Access");
const authentication = require("../middlewares/authentcation");
const router = express.Router();
const {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurants");

router.get("/", async (req, res) => {
  Access(res);
  return res.json(await getAllRestaurants());
});
router.get("/:id", async (req, res) => {
  Access(res);
  return res.json(await getRestaurantById(req.params.id));
});
router.post("/", async (req, res) => {
  Access(res);
  return res.json(await createRestaurant(req.body));
});
router.put("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await updateRestaurant(req.params.id, req.body));
});
router.delete("/:id", authentication, async (req, res) => {
  Access(res);
  return res.json(await deleteRestaurant(req.params.id));
});

module.exports = router;
