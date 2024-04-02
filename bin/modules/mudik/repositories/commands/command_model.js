const joi = require('joi');
const { v4: guid } = require('uuid');
const uuid = joi.string().guid();
const date = new Date();

const postMudik = joi.object({
  mudikId: joi.string().default(guid()),
  name: joi.string().required(),
  location: joi.string().optional(),
  isActive: joi.boolean().default(false),
  isDeleted: joi.boolean().default(false),
  createdAt: joi.date().default(date),
  createdBy: joi.string().default('Rafi'),
  modifiedAt: joi.date().default(date),
  modifiedBy: joi.string().default('Rafi'),
});

const putMudik = joi.object({
  mudikId: joi.string().default(guid()),
  name: joi.string().optional(),
  location: joi.string().optional(),
  isActive: joi.boolean().optional(),
  isDeleted: joi.boolean().optional(),
  modifiedAt: joi.string().default(date),
  modifiedBy: joi.string().default('Rafi'),
});

const deleteMudik = joi.object({
  mudikId: joi.string().optional(),
  isDeleted: joi.boolean().default(true),
  modifiedAt: joi.string().default(date),
  modifiedBy: joi.string().default('test'),
});

module.exports = {
  postMudik,
  putMudik,
  deleteMudik,
};

