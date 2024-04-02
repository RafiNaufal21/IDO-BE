const queryHandler = require('../repositories/queries/query_handler');
const queryModel = require('../repositories/queries/query_model');
const validator = require('../../../helpers/utils/validator');
const { sendResponse } = require('../../../helpers/utils/response');

//query

const getHeatmap = async (req, res) => {
  const result = await queryHandler.getHeatmap();
  return sendResponse(result, res);
};

const getScatterChart = async (req, res) => {
  const result = await queryHandler.getScatterChart();
  return sendResponse(result, res);
};
const getTreemapChart = async (req, res) => {
  const result = await queryHandler.getTreemapChart();
  return sendResponse(result, res);
};

const getHeatmapWithModel = async (req, res) => {
  const result = await queryHandler.getHeatmapWithModel();
  return sendResponse(result, res);
};
module.exports = {
  getHeatmap,
  getScatterChart,
  getTreemapChart,
  getHeatmapWithModel,
};

