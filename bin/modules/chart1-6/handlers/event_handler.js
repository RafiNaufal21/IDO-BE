const queryHandler = require('../repositories/queries/query_handler');

const getLineChart = async () => {
  return queryHandler.getLineChart();
};

module.exports = {
  getLineChart,
};

