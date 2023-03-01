const express = require("express");
const Access = require("./Access");
const {
  getAllMeals,
  getMealById,
  updateMeal,
  deleteMealById,
  createMeals,
} = require("../controllers/meals.js");
const router = express.Router();

router.get("/", async (req, res) => {
  Access(res);
  return res.json(await getAllMeals());
});

router.get("/:id", async (req, res) => {
  Access(res);
  return res.json(await getMealById(req.params.id));
});

router.post("/", async (req, res) => {
  Access(res);
  return res.json(await createMeals(req.body));
});

router.put("/:id", async (req, res) => {
  Access(res);
  return res.json(await updateMeal(req.params.id, req.body));
});
router.patch("/:id", async (req, res) => {
  Access(res);
  return res.json(await updateMeal(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  Access(res);
  return res.json(await deleteMealById(req.params.id));
});

module.exports = router;
