const joi = require('joi');
const { v4: guid } = require('uuid');

const getHeatmap = joi.object().keys({
  id: joi.string().default(guid()),
  category: joi.string().optional(),
  Dekstops: joi.string().optional(),
  title: joi.string().optional(),
  tooltip: joi.string().optional(),
  start_date: joi.date().raw().required().iso(),
  end_date: joi.date().raw().required().iso(),
});

const getScatterChart = joi.object().keys({
  id: joi.string().default(guid()),
  category: joi.string().optional(),
  Dekstops: joi.string().optional(),
  title: joi.string().optional(),
  tooltip: joi.string().optional(),
  start_date: joi.date().raw().required().iso(),
  end_date: joi.date().raw().required().iso(),
});

const getTreemapChart = joi.object().keys({
  id: joi.string().optional(),
});

module.exports = {
  getHeatmap,
  getScatterChart,
  getTreemapChart,
};

