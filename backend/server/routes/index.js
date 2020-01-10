var express = require('express');
var router = express.Router();

var ctrlApi = require('../controllers/api');

router.get('/getSchedule', ctrlApi.getSchedule);

router.post('/reserveSeat', ctrlApi.reserveSeat);

router.post('/buySeat', ctrlApi.buySeat);

router.post('/requestMeal', ctrlApi.requestMeal);

router.post('/submitFeedback', ctrlApi.submitFeedback);

module.exports = router;
