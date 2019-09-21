'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  patientId: {
    type: String,
    required: 'patient id'
  }
});

module.exports = mongoose.model('offers', TaskSchema);