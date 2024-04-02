const commandHandler = require('../repositories/commands/command_handler');
const queryHandler = require('../repositories/queries/query_handler');
const postMudik = async (payload) => {
  return commandHandler.postMudik(payload);
};

const getMudik = async (payload) => {
  return queryHandler.getMudik(payload);
};

const updateMudik = async (payload) => {
  return commandHandler.putMudik(payload);
};

const deleteMudik = async (payload) => {
  return commandHandler.deleteMudik(payload);
};
const putMudik = async (payload) => {
  return commandHandler.putMudik(payload);
};

const listMudik = async (payload) => {
  return queryHandler.listMudik(payload);
};

module.exports = {
  postMudik,
  getMudik,
  updateMudik,
  deleteMudik,
  listMudik,
};

