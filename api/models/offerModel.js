
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  patientId: {
    type: String,
   
  },
  price: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  desc: {
    type: String,
    required: 'Kindly enter the name of the task'

  },
  amount: {
    type: String,

  }
});

module.exports = mongoose.model('offers', TaskSchema);