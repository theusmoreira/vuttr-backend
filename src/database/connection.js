const mongoose = require('mongoose')

const uri = process.env.MONGO_URL
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}

mongoose
  .connection
  .on('error', err => console.log(err))
  .on('connected', () => console.log('> [Database] connected'))

const mongo = mongoose.connect(uri, options)
  .catch(err => console.log(err))

module.exports = mongo
