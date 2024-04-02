const Mudik = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));
const mudik = new Mudik(db);
const postMudik = async (payload) => {
  return mudik.postMudik(payload);
};
const putMudik = async (payload) => {
  return mudik.update(payload);
};
const deleteMudik = async (payload) => {
  return mudik.deleteMudik(payload);
};

module.exports = {
  postMudik,
  putMudik,
  deleteMudik,
};

