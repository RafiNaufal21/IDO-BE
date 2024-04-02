const joi = require('joi');
const { v4: guid } = require('uuid');

const getLineChart = joi.object().keys({
  id: joi.string().default(guid()),
  category: joi.string().optional(),
  Dekstops: joi.string().optional(),
  title: joi.string().optional(),
  tooltip: joi.string().optional(),
  start_date: joi.date().raw().required().iso(),
  end_date: joi.date().raw().required().iso(),
});

const getBarChart = joi.object().keys({
  id: joi.string().default(guid()),
  category: joi.string().optional(),
  Dekstops: joi.string().optional(),
  title: joi.string().optional(),
  tooltip: joi.string().optional(),
  start_date: joi.date().raw().required().iso(),
  end_date: joi.date().raw().required().iso(),
});

const getBarChartById = joi.object().keys({
  id: joi.string().optional(),
});

module.exports = {
  getLineChart,
  getBarChart,
  getBarChartById,
};

