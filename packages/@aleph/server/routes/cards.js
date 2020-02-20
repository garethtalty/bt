var express = require('express');
var router = express.Router();
var cards = require('../resources/cards');

/* GET cards listing. */
router.get('/', function(req, res, next) {
  res.send(cards);
});

module.exports = router;
