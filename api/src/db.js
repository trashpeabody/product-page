const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const { DB_USER, DB_PASSWORD, DB_NAME, DB_TEST_NAME, NODE_ENV } = process.env

const dataBaseName = NODE_ENV === 'test' ? DB_TEST_NAME : DB_NAME

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@productpage.cvkks.mongodb.net/${dataBaseName}?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected')
  }).catch(err => {
    console.error('Not connected', err)
  })
