const analysisModel = require("../models/restaurant_analysis");

async function getAllAnalysis() {
    try {
        return await analysisModel.find({});
    } catch (error) {
        console.log(error);
    }
}
async function getAnalysisById(AnalysisId) {
    try {
        return await analysisModel.findById(AnalysisId);
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
        return await analysisModel.findByIdAndDelete(AnalysisId)
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    getAllAnalysis,
    getAnalysisById,
    updateAnalysis,
    deleteAnalysisById,
    createAnalysis,
};