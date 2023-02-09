const express = require("express");
const mongoose = require("mongoose");
const {
  getAllAnalysis,
  getAnalysisById,
  updateAnalysis,
  deleteAnalysisById,
  createAnalysis } = require("../controllers/restaurant_analysis")

const router = express.Router();

router.use(express.json());

router.get("/", async (req, res) => {
  return res.json(await getAllAnalysis());
});

router.get("/:id", async (req, res) => {
  return res.json(await getAnalysisById(req.params.id));
});

router.post("/", async (req, res) => {
  return res.json(await createAnalysis(req.body));
});

router.put("/:id", async (req, res) => {
  return res.json(await updateAnalysis(req.params.id, req.body));
});
router.patch("/:id", async (req, res) => {
  return res.json(await updateAnalysis(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
  return res.json(await deleteAnalysisById(req.params.id));
});

module.exports = router;
