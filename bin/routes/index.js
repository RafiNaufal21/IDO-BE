const users = require('./users');
const mudik = require('./mudik');
const chart1 = require('./chart1-6');
const chart2 = require('./chart7-9');
module.exports = (server) => {
  users(server);
  mudik(server);
  chart1(server);
  chart2(server);
};

