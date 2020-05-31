require('dotenv').config()
require('./database/connection')

const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const Routes = require('./routes')

const app = express()
const port = process.env.PORT

app.use(cors())

app.set('port', port)
app.use(Routes)

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => console.log(`> [Server] start in Port ${port}`))
