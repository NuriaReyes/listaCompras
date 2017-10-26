const mongoose = require('mongoose')
const schema = mongoose.Schema

const marketsSchema = schema({
  name: String,
  address: String,
  webSite: String,
  logo: String
});

module.exports = mongoose.model('Markets', marketsSchema);
