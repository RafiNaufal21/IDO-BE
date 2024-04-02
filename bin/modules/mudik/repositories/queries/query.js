const collectionName = 'mudik';
const { ObjectId } = require('mongodb');

class Query {
  constructor(db) {
    this.db = db;
  }

  async findOne(parameter, projection) {
    return this.db.findOne(parameter, projection, collectionName);
  }
  async findById(id, projection) {
    const document = { _id: new ObjectId(id) };
    const result = await this.db.findOne(document, projection, collectionName);
    return result;
  }
  async findMany(parameter, projection, sort, page, limit) {
    return this.db.findMany(
      parameter,
      projection,
      sort,
      page,
      limit,
      collectionName
    );
  }

  async count(parameter) {
    return this.db.countData(parameter, collectionName);
  }

  async selectRawQuery(rawQuery, values) {
    return this.db.selectRawQuery(rawQuery, values);
  }
}

module.exports = Query;
