const mongoose = require('mongoose');

const uri = process.env.MONGO_URL;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
};

const mongo = mongoose.connect(uri, options)
.then(()=> console.log('DB connect'))
.catch(err => console.log(err));

module.exports = mongo;