const { Router } = require('express');

const Routes = Router();

const ToolsController = require('./controllers/ToolsController');
const UserController = require('./controllers/UserController');

Routes
.get('/tools', ToolsController.index)
.post('/tools', ToolsController.create)
.delete('/tools/:id', ToolsController.destroy)
.get('/tools/search', ToolsController.show);

Routes
.post('/users', UserController.create)
.get('/users', UserController.index)


module.exports = Routes;