// server/models/Bed.js
const mongoose = require('mongoose');

const bedSchema = new mongoose.Schema({
  bedNo: { type: Number, required: true },
  roomNo: { type: Number, required: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' },
  occupiedAt: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Bed', bedSchema);
