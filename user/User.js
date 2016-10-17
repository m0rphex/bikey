var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var UserSchema = new mongoose.Schema({
  name: String,
});
UserSchema.plugin(timestamps);
module.exports = mongoose.model('User', BikeSchema);