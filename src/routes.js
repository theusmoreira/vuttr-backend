const { Router } = require('express');

const Routes = Router();

const AuthMiddleware = require('./middlewares/Auth');

const ToolsController = require('./controllers/ToolsController');
const UserController = require('./controllers/UserController');
const LoginController = require('./controllers/LoginController');

Routes
  .get('/tools', AuthMiddleware, ToolsController.index)
  .post('/tools', AuthMiddleware, ToolsController.create)
  .delete('/tools/:id', AuthMiddleware, ToolsController.destroy)
  .get('/tools/search', AuthMiddleware, ToolsController.show);

Routes
  .get('/users', UserController.index)
  .post('/users', UserController.create)

Routes
  .post('/login', LoginController.index);

module.exports = Routes;