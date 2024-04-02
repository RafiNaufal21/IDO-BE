
class Command {

  constructor(db) {
    this.db = db;
  }

  async insertOne(document){
    this.db.setCollection('user');
    const result = await this.db.insertOne(document);
    return result;
  }

  async upsertOne(param, document){
    this.db.setCollection('user');
    const result = await this.db.upsertOne(param, document);
    return result;
  }

}

module.exports = Command;
