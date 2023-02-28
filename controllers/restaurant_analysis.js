const analysisModel = require("../models/restaurant_analysis");

async function getAllAnalysis() {
  try {
    return await analysisModel.find({}).populate("meals_orders.meal_id");
  } catch (error) {
    console.log(error);
  }
}
async function getAnalysisById(AnalysisId) {
  try {
    return await analysisModel
      .findById(AnalysisId)
      .populate("meals_orders.meal_id");
  } catch (error) {
    console.log(error);
  }
}
async function getAnalysisByRestaurantId(restaurant_id) {
  try {
    return await analysisModel
      .find({ restaurant_id })
      .populate("meals_orders.meal_id");
  } catch (error) {
    console.log(error);
  }
}
async function updateAnalysis(AnalysisId, AnalysisData) {
  try {
    return await analysisModel.findByIdAndUpdate(AnalysisId, AnalysisData);
  } catch (error) {
    console.log(error);
  }
}

async function createAnalysis(AnalysisData) {
  try {
    return await analysisModel.create(AnalysisData);
  } catch (error) {
    console.log(error);
  }
}
async function deleteAnalysisById(AnalysisId) {
  try {
    return await analysisModel.findByIdAndDelete(AnalysisId);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllAnalysis,
  getAnalysisById,
  getAnalysisByRestaurantId,
  updateAnalysis,
  deleteAnalysisById,
  createAnalysis,
};
