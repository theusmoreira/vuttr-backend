require('dotenv').config();
require('./database/connection');

const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const Routes = require('./routes');

const app = express();
const port = process.env.PORT;
app.set('port', port);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.use(cors({
  origin: true
}));
app.use(Routes);

app.listen(port, () => console.log(`> [Server] start in Port ${port}`));
