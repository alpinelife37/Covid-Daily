const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const SymptomsSchema = new Schema({
  fever: {
    type: Boolean,
    required: true
  },
  cough: {
    type: Boolean,
    required: true
  },
  breath: {
    type: Boolean,
    required: true
  },
  headache: {
    type: Boolean,
    required: true
  },
  fatigue: {
    type: Boolean,
    required: true
  },
  troublebreathing: {
    type: Boolean,
    required: true
  },
  paininchest: {
    type: Boolean,
    required: true
  },
  severity: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  userid: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Symptoms = mongoose.model("Symptoms", SymptomsSchema);
