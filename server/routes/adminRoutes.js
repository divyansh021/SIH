const express = require('express');
const { updatePatientDetails, updateBedAvailability } = require('../controllers/adminController');
const { verifyAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

router.put('/patient/:patientId', verifyAdmin, updatePatientDetails);
router.put('/bed/:bedId', verifyAdmin, updateBedAvailability);

module.exports = router;
