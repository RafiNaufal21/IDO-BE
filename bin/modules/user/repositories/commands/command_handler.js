
const User = require('./domain');
const Mongo = require('../../../../helpers/databases/mongodb/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mongo(config.get('/mongoDbUrl'));

const login = async (payload) => {
  const user = new User(db);
  const postCommand = async payload => user.login(payload);
  return postCommand(payload);
};

const register = async (payload) => {
  const user = new User(db);
  const postCommand = async payload => user.register(payload);
  return postCommand(payload);
};

const addUser = async (payload) => {
  const user = new User(db);
  const postCommand = async payload => user.directAddUser(payload);
  return postCommand(payload);
};

const updateUser = async (payload) => {
  const user = new User(db);
  const postCommand = async (payload) => user.directUpdateUser(payload);
  return postCommand(payload);
};

module.exports = {
  login,
  register,
  addUser,
  updateUser,
};
