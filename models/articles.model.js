const mongoose = require('mongoose')
const schema = mongoose.Schema

const articlesSchema = schema({
  name: String,
  price: Number,
  quantity: Number
});

module.exports = mongoose.model('articles', articlesSchema);
