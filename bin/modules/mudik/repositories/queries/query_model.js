const joi = require('joi');
const { v4: guid } = require('uuid');
const uuid = joi.string().guid();

const getMudik = joi.object().keys({
  id: joi.string().default(guid()),
});
const listMudik = joi.object().keys({
  _id: joi.string().default(guid()),
  name: joi.string().optional(),
  location: joi.string().optional(),
});
const getMudikById = joi.object().keys({
  mudikId: joi.string().optional(),
});
module.exports = {
  getMudik,
  listMudik,
  getMudikById,
};

