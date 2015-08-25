'use strict';

var express = require('express');
var controller = require('./yelp.controller');

var router = express.Router();

router.get('/search/', controller.search);
router.get('/business/', controller.business);

module.exports = router;
