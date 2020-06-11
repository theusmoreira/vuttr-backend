const { Router } = require('express');

const Routes = Router();

const AuthMiddleware = require('./middlewares/Auth');

const ToolsController = require('./controllers/ToolsController');
const FilterToolsController = require('./controllers/FilterToolsController');

const UserController = require('./controllers/UserController');

const LoginController = require('./controllers/LoginController');

Routes.get('/', AuthMiddleware, ToolsController.index);

Routes.get('/tools', AuthMiddleware, FilterToolsController.index);
Routes.post('/tools', AuthMiddleware, ToolsController.create);
Routes.delete('/tools/:id', AuthMiddleware, ToolsController.destroy);

Routes.post('/users', UserController.create);

Routes.post('/login', LoginController.store);

module.exports = Routes;
