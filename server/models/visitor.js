const mongoose = require('mongoose'),
      Schema = mongoose.Schema,

var Visitor = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  telephone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  officialVisit: {
    type: Boolean
  },
  escortRequired: {
    type: Boolean
  },
  escortName: {
    type: String,
    required: false,
    trim: true
  },
  createdOn: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Visitor', Visitor)