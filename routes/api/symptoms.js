const router = require("express").Router();
const Symptoms = require("../../models/Symptoms");

router.post("/api/symptoms", (req, res) => {
  Symptoms.findOneAndUpdate(
    { _id: req.body.symptomid },
    {
      fever: req.body.userSymptoms[0].isChecked,
      cough: req.body.userSymptoms[1].isChecked,
      breath: req.body.userSymptoms[2].isChecked,
      headache: req.body.userSymptoms[3].isChecked,
      fatigue: req.body.userSymptoms[4].isChecked,
      troublebreathing: req.body.userSymptoms[5].isChecked,
      paininchest: req.body.userSymptoms[6].isChecked,
      severity: req.body.severity,
      color: req.body.color
    },
    { new: true }
  )
    .then(symptomsDocument => {
      res.json(symptomsDocument);
    })
    .catch(err => console.log(err));
});

module.exports = router;
