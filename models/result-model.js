const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Result = new Schema(
    {
        alias: {type: String, required: true},
        age: {type: Number, required: true},
        gender: {type: String, required: true},
        result: {type: Array, required: true},
        answers: {type: Array, required: true},

    }
);

module.exports = mongoose.model('results', Result)