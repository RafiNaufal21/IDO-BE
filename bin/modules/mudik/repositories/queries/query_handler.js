const Mudik = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const mudik = new Mudik(db);

const getMudik = async (payload) => {
  return mudik.getMudik(payload);
};

const listMudik = async () => {
  return mudik.listMudik();
};
const getMudikById = async (payload) => {
  return mudik.getMudikById(payload);
};
module.exports = {
  getMudik,
  listMudik,
  getMudikById,
};

