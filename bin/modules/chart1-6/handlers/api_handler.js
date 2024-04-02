const queryHandler = require('../repositories/queries/query_handler');
const queryModel = require('../repositories/queries/query_model');
const validator = require('../../../helpers/utils/validator');
const { sendResponse } = require('../../../helpers/utils/response');

//query
//Line Chart API
const getLineChart = async (req, res) => {
  const result = await queryHandler.getLineChart();
  return sendResponse(result, res);
};

//Bar Chart API
const getBarChart = async (req, res) => {
  const result = await queryHandler.getBarChart();
  return sendResponse(result, res);
};
const getStackedBarChart = async (req, res) => {
  const result = await queryHandler.getStackedBarChart();
  return sendResponse(result, res);
};
const getGroupedBarChart = async (req, res) => {
  const result = await queryHandler.getGroupedBarChart();
  return sendResponse(result, res);
};
const getBarChartById = async (req, res) => {
  const { params } = req;
  // console.log(params);
  const isValid = validator.isValidPayload(params, queryModel.getBarChartById);
  if (isValid.err) {
    return sendResponse(isValid, res);
  }
  const { data } = isValid;
  const result = await queryHandler.getBarChartById(data);
  return sendResponse(result, res);
};

//Pie Chart API
const getPieChart = async (req, res) => {
  const result = await queryHandler.getPieChart();
  return sendResponse(result, res);
};
const getDoughnutChart = async (req, res) => {
  const result = await queryHandler.getDoughnutChart();
  return sendResponse(result, res);
};

//Table Chart API
const getTableChart = async (req, res) => {
  const result = await queryHandler.getTableChart();
  return sendResponse(result, res);
};

module.exports = {
  getLineChart,
  getBarChart,
  getStackedBarChart,
  getGroupedBarChart,
  getBarChartById,
  getPieChart,
  getDoughnutChart,
  getTableChart,
};

