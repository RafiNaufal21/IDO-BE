const Query = require('../queries/query');
const logger = require('../../../../helpers/utils/logger');
const wrapper = require('../../../../helpers/utils/wrapper');
const { InternalServerError } = require('../../../../helpers/error');
const Command = require('./command');
const ctx = 'Mudik-Command-Domain';
class Mudik {
  constructor(db) {
    this.command = new Command(db);
    this.query = new Query(db);
  }
  async postMudik(payload) {
    const {
      mudikId,
      name,
      location,
      isActive,
      isDeleted,
      createdAt,
      createdBy,
      modifiedAt,
      modifiedBy,
    } = payload;
    const mudik = {
      mudikId,
      name,
      location,
      isActive,
      isDeleted,
      createdAt,
      createdBy,
      modifiedAt,
      modifiedBy,
    };
    const result = this.command.insertOne(mudik);
    if (result.err) {
      return wrapper.error(
        new InternalServerError('can not create to database')
      );
    }
    return wrapper.data({ name, location });
  }

  async update(payload) {
    const { mudikId, name, location } = payload;
    const params = { mudikId: mudikId };
    const mudik = { name, location };

    const result = await this.command.updateOne(params, mudik);
    if (result.err) {
      logger.error(ctx, result.err, 'can not update product');
      return wrapper.error(new InternalServerError('can not update product'));
    }
    return wrapper.data(result);
  }
  //   const result = this.command.updateOne(parameter, mudik);
  //   if (result.err) {
  //     return wrapper.error(
  //       new InternalServerError('can not update to database')
  //     );
  //   }
  //   return wrapper.data(mudik);
  // }

  async deleteMudik(payload) {
    const { mudikId } = payload;
    const mudik = { mudikId: mudikId };
    const result = this.command.deleteOne(mudik);
    if (result.err) {
      return wrapper.error(
        new InternalServerError('can not delete to database')
      );
    }
    return wrapper.data(mudik);
  }
}
module.exports = Mudik;

