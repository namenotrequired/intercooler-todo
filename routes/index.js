'use strict';
var express = require('express');
var router = express.Router();
var todos = require('../data');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
  	title: 'To Do',
  	todos: todos,
  });
});

module.exports = router;
