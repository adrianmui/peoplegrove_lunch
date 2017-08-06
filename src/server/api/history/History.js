const mongoose = require('mongoose');
const DataTypes = mongoose.SchemaTypes;

const historySchema = mongoose.Schema({
  rating: {
    type: DataTypes.Number,
    required: true
  },
  date: {
    type: DataTypes.Date,
    required: true,
    default: Date.now
  },

  place: {type: DataTypes.ObjectId, ref: 'Place'},
});

const history = mongoose.model('history', historySchema);

module.exports = history;