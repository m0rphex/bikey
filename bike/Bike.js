var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var BikeSchema = new mongoose.Schema({
  manufacturer: String,
  model: String,
  type: String,
  description: String,
  street: String,
  postcode: String,
  city: String,
  image_header_id: String,
  image_group_id: String,
  seller_name: String,
  seller_email: String,
  seller_phone: String,
  price: Number,
  gears: Number,
  top_tube_length: Number,
  seat_tube_length: Number,
  tube_height: Number,
  sold: Boolean,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Bike', BikeSchema);
