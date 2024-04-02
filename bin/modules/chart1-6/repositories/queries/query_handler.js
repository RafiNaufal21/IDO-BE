const LineChart = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const lineCart = new LineChart(db);

const getLineChart = async () => {
  return lineCart.getLineChart();
};

const getBarChart = async () => {
  return lineCart.getBarChart();
};

const getPieChart = async () => {
  return lineCart.getPieChart();
};

const getBarChartById = async (payload) => {
  return lineCart.getBarChartById(payload);
};

const getTableChart = async () => {
  return lineCart.getTableChart();
};

const getDoughnutChart = async () => {
  return lineCart.getDoughnutChart();
};

const getGroupedBarChart = async () => {
  return lineCart.getGroupedBarChart();
};

const getStackedBarChart = async () => {
  return lineCart.getStackedBarChart();
};
module.exports = {
  getLineChart,
  getBarChart,
  getGroupedBarChart,
  getStackedBarChart,
  getPieChart,
  getDoughnutChart,
  getBarChartById,
  getTableChart,
};

