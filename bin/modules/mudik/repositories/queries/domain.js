const Query = require('./query');
const wrapper = require('../../../../helpers/utils/wrapper');
const logger = require('../../../../helpers/utils/logger');
const { NotFoundError } = require('../../../../helpers/error');
const ctx = 'Mudik-Query-Domain';

class Mudik {
  constructor(db) {
    this.query = new Query(db);
  }
  async getMudik(payload) {
    const mudik = await this.query.findById(payload.id, {
      _id: 1,
      mudikId: 1,
      name: 1,
      location: 1,
      createdAt: 1,
      modifiedAt: 1,
    });
    if (mudik.err) {
      logger.error(`${ctx}:getMudik`, 'Can not find mudik', mudik.err);
      return wrapper.error(new NotFoundError('Can not find mudik'));
    }
    const { data } = mudik;
    return wrapper.data(data);
  }

  async getMudikById(payload) {
    const mudik = await this.query.findOne(
      { mudikId: payload.mudikId },
      {
        mudikId: 1,
        name: 1,
        location: 1,
      }
    );
    if (mudik.err) {
      logger.error(`${ctx}:getMudikById`, 'Can not find mudik', mudik.err);
      return wrapper.error(new NotFoundError('Can not find mudik'));
    }
    const { data } = mudik;
    return wrapper.data(data);
  }

  async listMudik() {
    const mudik = await this.query.findMany({}, null, null, 1, 0);
    if (mudik.err) {
      logger.error(ctx, mudik.err, 'can not find data mudik');
      return wrapper.error(new NotFoundError('can not find data mudik'));
    }
    const { data } = mudik;
    return wrapper.data(data);
  }
}
module.exports = Mudik;

