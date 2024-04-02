const lineChart = require('../modules/chart1-6/handlers/api_handler');

module.exports = (server) => {
  server.get('/codebase/v1/linechart', lineChart.getLineChart);
  server.get('/codebase/v1/barchart', lineChart.getBarChart);
  server.get('/codebase/v1/piechart', lineChart.getPieChart);
  server.get('/codebase/v1/barchart/:id', lineChart.getBarChartById);
  server.get('/codebase/v1/tablechart', lineChart.getTableChart);
};

