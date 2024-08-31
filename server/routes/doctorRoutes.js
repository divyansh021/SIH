// server/routes/doctorRoutes.js

const express = require('express');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const Bed = require('../models/Bed');
const Medicine = require('../models/Medicine');

const router = express.Router();

// Route to get all bed availability
router.get('/beds', auth, async (req, res) => {
  try {
    const beds = await Bed.find().populate('patient', 'name');
    res.json(beds);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Route to get all medicine inventory
router.get('/medicines', auth, async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
