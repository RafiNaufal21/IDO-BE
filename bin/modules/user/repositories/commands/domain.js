const { v4: uuid } = require('uuid');
const Query = require('../queries/query');
const Command = require('./command');
const wrapper = require('../../../../helpers/utils/wrapper');
const jwtAuth = require('../../../../auth/jwt_auth_helper');
const commonUtil = require('../../../../helpers/utils/common');
const logger = require('../../../../helpers/utils/logger');
const {
  UnauthorizedError,
  NotFoundError,
  ConflictError,
  InternalServerError,
} = require('../../../../helpers/error');
const ctx = 'User-Command-Domain';

class User {
  constructor(db) {
    this.command = new Command(db);
    this.query = new Query(db);
  }

  async login(payload) {
    const { username, password } = payload;
    const user = await this.query.findOneUser({ username }, { _id: 0 });
    if (user.err) {
      logger.log(`${ctx}:generateCredential`, user.err, 'user not found');
      return wrapper.error(new NotFoundError('user not found'));
    }
    const passwordMatch = await commonUtil.compareHash(
      password,
      user.data.password
    );
    if (username !== user.data.username || !passwordMatch) {
      return wrapper.error(new UnauthorizedError('Password invalid!'));
    }
    delete user.data.password;
    const token = await jwtAuth.generateToken(user.data);
    return wrapper.data(token);
  }

  async register(payload) {
    const { username, password, isActive } = payload;
    const user = await this.query.findOneUser({ username }, { _id: 0 });
    if (user.data) {
      return wrapper.error(new ConflictError('user already exist'));
    }
    const hashed = await commonUtil.generateHash(password);
    const data = {
      userId: uuid(),
      username,
      password: hashed,
      isActive,
    };
    const result = await this.command.insertOne(data);
    if (result.err) {
      logger.error(ctx, 'register', 'can not insert to database', result.err);
      return wrapper.error(
        new InternalServerError('can not insert to database')
      );
    }
    delete data.password;
    return wrapper.data(data);
  }

  async directAddUser(payload) {
    const query = await this.query.findOneUser(
      { userId: payload.userId },
      { _id: 0 }
    );
    if (query.data) {
      logger.error(
        ctx,
        'directAddUser',
        'User already exist',
        JSON.stringify(payload)
      );
      return query;
    }
    const result = await this.command.insertOne(payload);
    if (result.err) {
      logger.error(
        ctx,
        'directAddUser',
        'Can not create user from Kafka message',
        result.err
      );
    }
    logger.info(
      ctx,
      'directAddUser',
      'User created from Kafka message',
      result.data
    );
    return result;
  }

  async directUpdateUser(payload) {
    const { userId, document } = payload;
    const postUser = await this.command.upsertOne({ userId }, document);
    if (postUser.err) {
      logger.error(
        `${ctx}:directUpdateUser`,
        'Can not update user from Kafka message',
        postUser.err
      );
    }
    logger.info(
      `${ctx}:directUpdateUser`,
      'User updated from Kafka message',
      postUser.data
    );
    return postUser;
  }
}

module.exports = User;
