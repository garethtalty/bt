var express = require('express');
var router = express.Router();
var swagger = require('../resources/swagger.json');

/* GET docs listing. */
router.get('/swagger.json', function(req, res, next) {
  res.send(swagger);
});

module.exports = router;
