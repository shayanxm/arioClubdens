
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
  code: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  price: {
    type: String,
    required: 'Kindly enter the name of the task'

  

  }
});

module.exports = mongoose.model('products', TaskSchema);