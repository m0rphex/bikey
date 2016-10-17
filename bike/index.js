var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Bike = require('./Bike');


/* GET /bikes listing. */
router.get('/all', function (req, res, next) {
  Bike.find(function (err, bikes) {
    if (err) return next(err);
    res.json(bikes);
  }).limit(10);
});

/* POST /bikes */
router.post('/create', function (req, res, next) {
  Bike.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /bikes/id */
router.get('/:id', function (req, res, next) {
  Bike.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /bikes/:id */
router.put('/:id', function (req, res, next) {
  Bike.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /bikes/:id */
router.delete('/:id', function (req, res, next) {
  Bike.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;