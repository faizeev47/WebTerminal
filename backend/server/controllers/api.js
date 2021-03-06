

module.exports.getSchedule = function(req, res) {
  res.status(200).json([{
    journeyId: 1,
    flightNumber: 'EY323',
    destinationCode: 'DUB',
    originCode: 'DXB',
    arrivalTime: '17:00 26/09/20',
    departureTime: '13:00 27/09/20',
    remainingSeats: 10,
  },
  {
    journeyId: 2,
    flightNumber: 'CY131',
    destinationCode: 'ISB',
    originCode: 'JFK',
    arrivalTime: '03:00 25/10/20',
    departureTime: '17:00 25/10/20',
    remainingSeats: 0,
  }]);
}

module.exports.reserveSeat = function(req, res) {
  var journeyId = req.body.journeyId;
  var nic = req.body.nic;
  res.json({
    success: true,
    message:
      'Seat reserved under ' + nic + 'for journey: ' + journeyId
  });
}

module.exports.buySeat = function(req, res) {
  var journeyId = req.body.journeyId;
  var nic = req.body.nic;
  res.json({
    success: true,
    message:
      'Ticket bought under ' + nic +' for journey: ' + journeyId
  });
}

module.exports.requestMeal = function(req, res) {
  var journeyId = req.body.journeyId;
  var nic = req.body.nic;
  var meal = req.body.meal;
  res.json({
    success: true,
    message:
      'A ' + req.body.meal +' requested as meal for passenger ' +nic + ' on journey: ' + journeyId
  })
}

module.exports.submitFeedback = function(req, res) {
  var feedback = req.body.feedback;
  res.json({
    success: true,
    message:
      'Thank you for your feedback'
  })
}
