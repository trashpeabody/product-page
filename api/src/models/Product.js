const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  price: {
    type: Number,
    required: true
  },
  hasDiscount: {
    type: Boolean,
    required: true,
    default: false
  },
  discount: {
    type: Number,
    required: false
  },
  id: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Product', schema)
