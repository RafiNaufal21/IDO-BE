const chart = require('../modules/chart7-9/handlers/api_handler');

module.exports = (server) => {
  server.get('/codebase/v1/heatmap', chart.getHeatmap);
  server.get('/codebase/v1/heatmapwithmodel', chart.getHeatmapWithModel);
  server.get('/codebase/v1/scatterchart', chart.getScatterChart);
  server.get('/codebase/v1/treemap', chart.getTreemapChart);
};

