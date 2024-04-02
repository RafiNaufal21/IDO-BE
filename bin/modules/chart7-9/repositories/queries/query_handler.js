const Chart = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const chart = new Chart(db);

const getHeatmap = async () => {
  return chart.getHeatmap();
};

const getScatterChart = async () => {
  return chart.getScatterChart();
};

const getTreemapChart = async () => {
  return chart.getTreemapChart();
};

const getHeatmapWithModel = async () => {
  return chart.getHeatmapWithModel();
};

module.exports = {
  getHeatmap,
  getTreemapChart,
  getScatterChart,
  getHeatmapWithModel,
};

