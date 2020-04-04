const router = require("express").Router();
const Symptoms = require("../../models/Symptoms");

router.post("/api/symptoms", (req, res) => {
    console.log(req.body);
//   Symptoms.findByIdAndUpdate({

//   })
//     .then(symptomsDocument => {
//       res.json(symptomsDocument);
//     })
//     .catch(err => console.log(err));
});

module.exports = router;
