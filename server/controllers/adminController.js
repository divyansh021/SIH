const Patient = require('../models/Patient');
const Bed = require('../models/Bed');

exports.updatePatientDetails = async (req, res) => {
  const { patientId } = req.params;
  const updateData = req.body;

  try {
    const updatedPatient = await Patient.findByIdAndUpdate(patientId, updateData, { new: true });
    res.json(updatedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Error updating patient details' });
  }
};

exports.updateBedAvailability = async (req, res) => {
  const { bedId } = req.params;
  const updateData = req.body;

  try {
    const updatedBed = await Bed.findByIdAndUpdate(bedId, updateData, { new: true });
    res.json(updatedBed);
  } catch (error) {
    res.status(500).json({ error: 'Error updating bed availability' });
  }
};
