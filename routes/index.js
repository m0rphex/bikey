var express = require('express');
var router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route.. add next when necessary
router.get('/', function(req, res) {
  res.render('../home');
});

router.get('/home', function(req, res) {
  res.render('../home');
});


// define the about route
router.get('/bike', function(req, res) {
  res.render('../bike');
});

module.exports = router;