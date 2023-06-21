const mongoose = require('mongoose');

const AssetSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true }, // equity, fixed_income, alternatives
  name: { type: String, required: true },
  value: { type: Number, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date },
});

module.exports = mongoose.model('Asset', AssetSchema);