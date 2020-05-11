const { Router } = require('express');

const Routes = Router();

const ToolsController = require('./controllers/ToolsController');

Routes.get('/tools', ToolsController.index);
Routes.post('/tools', ToolsController.create);
Routes.delete('/tools/:id', ToolsController.destroy);
Routes.get('/tools/search', ToolsController.show);


module.exports = Routes;