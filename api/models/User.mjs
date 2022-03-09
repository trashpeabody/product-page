import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 5
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  id: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: false
  }
})

export default mongoose.model('User', schema)
