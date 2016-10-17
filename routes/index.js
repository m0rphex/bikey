var express = require('express');
var router = express.Router();
var bike = require('../bike');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function (req, res) {
  res.render('../home');
});

router.get('/home', function (req, res) {
  res.render('../home');
});

router.get('/login', function (req, res) {
  res.render('../login');
});

router.get('/register', function (req, res) {
  res.render('../register');
});

router.get('/find_bike', function (req, res) {
  res.render('../find_bike');
});

router.get('/create_bike', function (req, res) {
  res.render('../create_bike');
});

router.use('/bike',bike);

module.exports = router;