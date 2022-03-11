import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const { DB_USER, DB_PASSWORD } = process.env

const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@productpage.cvkks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected')
  }).catch(err => {
    console.error('Not connected', err)
  })
