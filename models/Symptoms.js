const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SymptomsSchema = new Schema({
  fever: {
    type: Boolean,
    default: false
  },
  cough: {
    type: Boolean,
    default: false
  },
  breath: {
    type: Boolean,
    default: false
  },
  headache: {
    type: Boolean,
    default: false
  },
  fatigue: {
    type: Boolean,
    default: false
  },
  troublebreathing: {
    type: Boolean,
    default: false
  },
  paininchest: {
    type: Boolean,
    default: false
  },
  severity: {
    type: Number,
    default: 0
  },
  color: {
    type: String,
    default: "green"
  },
  useridlink: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Symptoms = mongoose.model("symptoms", SymptomsSchema);
