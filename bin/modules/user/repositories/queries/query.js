class Query {

  constructor(db) {
    this.db = db;
  }

  async findOneUser(parameter, projection) {
    this.db.setCollection('user');
    return this.db.findOneProject(parameter, projection);
  }
}

module.exports = Query;
