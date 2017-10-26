const mongoose = require('mongoose')
const schema = mongoose.Schema

const listObjSchema = schema({
  name: String,
  quantity: Number
});

module.exports = mongoose.model('listObj', listObjSchema);
