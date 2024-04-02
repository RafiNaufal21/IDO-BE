const commandHandler = require('../repositories/commands/command_handler');
const commandModel = require('../repositories/commands/command_model');
const queryHandler = require('../repositories/queries/query_handler');
const queryModel = require('../repositories/queries/query_model');
const validator = require('../../../helpers/utils/validator');
const { sendResponse } = require('../../../helpers/utils/response');

//query
const getMudik = async (req, res) => {
  const { params } = req;
  // console.log(params);
  const isValid = validator.isValidPayload(params, queryModel.getMudik);
  if (isValid.err) {
    return sendResponse(isValid, res);
  }
  const { data } = isValid;
  const result = await queryHandler.getMudik(data);
  return sendResponse(result, res);
};

const getMudikById = async (req, res) => {
  const { params } = req;
  const isValid = validator.isValidPayload(params, queryModel.getMudikById);
  if (isValid.err) {
    return sendResponse(isValid, res);
  }
  const { data } = isValid;
  const result = await queryHandler.getMudikById(data);
  return sendResponse(result, res);
};

const listMudik = async (req, res) => {
  // const { query } = req;
  // const isValid = validator.isValidPayload(query, queryModel.listMudik);
  // if (isValid.err) {
  //   return sendResponse(isValid, res);
  // }
  // const { data } = isValid;
  const result = await queryHandler.listMudik();
  return sendResponse(result, res);
};

//commands
const postMudik = async (req, res) => {
  const payload = { ...req.body };
  const validatePayload = validator.isValidPayload(
    payload,
    commandModel.postMudik
  );
  if (validatePayload.err) {
    return sendResponse(validatePayload, res);
  }
  const result = await commandHandler.postMudik(validatePayload.data);
  return sendResponse(result, res);
};

const putMudik = async (req, res) => {
  const payload = { ...req.body, ...req.params };
  const validatePayload = validator.isValidPayload(
    payload,
    commandModel.putMudik
  );
  if (validatePayload.err) {
    return sendResponse(validatePayload, res);
  }
  const { data } = validatePayload;
  const result = await commandHandler.putMudik({ ...data });
  return sendResponse(result, res);
};

const deleteMudik = async (req, res) => {
  const { params } = req;
  const isValid = validator.isValidPayload(params, commandModel.deleteMudik);
  if (isValid.err) {
    return sendResponse(isValid, res);
  }
  const { data } = isValid;
  const result = await commandHandler.deleteMudik(data);
  return sendResponse(result, res);
};
module.exports = {
  getMudik,
  listMudik,
  getMudikById,
  postMudik,
  deleteMudik,
  putMudik,
};

