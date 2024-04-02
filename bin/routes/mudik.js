const mudikHandler = require('../modules/mudik/handlers/api_handler');

module.exports = (server) => {
  server.get('/codebase/v1/mudik/:id', mudikHandler.getMudik);
  server.get('/codebase/v1/mudik/id/:mudikId', mudikHandler.getMudikById);
  server.get('/codebase/v1/mudik', mudikHandler.listMudik);
  server.post('/codebase/v1/mudik', mudikHandler.postMudik);
  server.put('/codebase/v1/mudik/:mudikId', mudikHandler.putMudik);
  server.del('/codebase/v1/mudik/:mudikId', mudikHandler.deleteMudik);
};

