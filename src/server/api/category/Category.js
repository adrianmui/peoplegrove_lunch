const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const categorySchema = mongoose.Schema({
  name: {
    type: DataTypes.String,
    required: true,
    unique: true
  }
});

const category = mongoose.model('Category', categorySchema);

module.exports = category;