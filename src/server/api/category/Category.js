const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const categorySchema = mongoose.Schema({
  email: DataTypes.String,
  token: DataTypes.String,

  categories: [{type: Schema.Types.ObjectId, ref: 'category'}]
});


const category = mongoose.model('Category', categorySchema);

module.exports = category;