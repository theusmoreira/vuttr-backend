const { Router } = require('express');

const Routes = Router();

const ToolsController = require('./controllers/ToolsController');

Routes.get('/tools', ToolsController.index);
Routes.post('/tools/create', ToolsController.create);


module.exports = Routes;