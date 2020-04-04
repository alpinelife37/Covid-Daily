const router = require("express").Router();
const Symptoms = require("../../models/Symptoms");

router.post("/api/symptoms", (req, res) => {
  // console.log(req.body);
  req.body.severityvalues = req.body.severityvalues.reduce((a, b) => a + b, 0);
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
      severity: req.body.severityvalues,
      color: req.body.color
    },
    { new: true }
  )
    .then(symptomsDocument => {
      res.json(symptomsDocument);
    })
    .catch(err => console.log(err));
});

router.get("/api/usersymptoms", (req, res) => {
  Symptoms.findOne({_id: req.query.ID})
    .then(symptomsDocument => {
      res.json(symptomsDocument);
    })
    .catch(err => console.log(err));
});

module.exports = router;
