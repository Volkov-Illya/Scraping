'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    mongoose.Promise = require('bluebird');

const newsModel = new Schema({
  postId: {
    type: String,
    trim: true
  },
  title: {
    type: String,
    trim: true
  },
  url: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('newsModel', newsModel);