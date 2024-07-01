var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Capstone Project 1', message: 'This is a capstone project to show NodeJS deployment on Azure app service' });
});

module.exports = router;
