
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  password: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  family: {
    type: String,

  },
  nationalCode: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  phoneNumber: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  email: {
    type: String,
  
  },
  Address: {
    type: String,

  },
  

  Created_date: {
    type: Date,
    default: Date.now
  },

  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);