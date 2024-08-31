// server/models/Patient.js
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  disease: { type: String, required: true },
  bed: { type: mongoose.Schema.Types.ObjectId, ref: 'Bed' }
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
