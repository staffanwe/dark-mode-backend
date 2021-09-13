/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const Result = require('../models/result-model');

createResult = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide result',
    });
  }

  const result = new Result(body);
  if (!result) {
    return res.status(400).json({ success: false, error: err });
  }

  result
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: result.alias,
        message: 'Result created',
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: 'Result not created',
      });
    });
};

getAllResults = async (req, res) => {
  await Result.find({}, (err, results) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!results.length) {
      return res.status(404).json({ success: false, error: `No players found` });
    }
    return res.status(200).json({ success: true, data: results});
  }).catch((err) => console.log(err));
};


module.exports = {
  createResult,
  getAllResults
};
