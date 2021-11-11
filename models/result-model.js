const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Result = new Schema({
  alias: { type: String, required: false },
  age: { type: Number, required: false },
  gender: { type: String, required: false },
  vision: { type: String, required: false },
  computer: { type: Number, required: false },
  experience: { type: Number, required: false },
  result: { type: Array, required: false },
  answers: { type: Array, required: false },
});

module.exports = mongoose.model('results', Result);
