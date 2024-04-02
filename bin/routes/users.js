const basicAuth = require('../auth/basic_auth_helper');
const jwtAuth = require('../auth/jwt_auth_helper');
const userHandler = require('../modules/user/handlers/api_handler');

module.exports = (server) => {
  server.post(
    '/codebase/v1/user',
    basicAuth.isAuthenticated,
    userHandler.register
  );
  server.post(
    '/codebase/v1/login',
    basicAuth.isAuthenticated,
    userHandler.login
  );
  server.get('/codebase/v1/user', jwtAuth.verifyToken, userHandler.getUser);
};

