const express = require('express');

const ResultController = require('../controllers/result-controller');

const router = express.Router();

router.post('/result', ResultController.createResult);
router.get('/results', ResultController.getAllResults);

module.exports = router;