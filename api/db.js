import mongoose from 'mongoose'
import credentials from './credentials.mjs'

const connectionString = `mongodb+srv://${credentials.db.user}:${credentials.db.password}@productpage.cvkks.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected')
  }).catch(err => {
    console.error('Not connected', err)
  })
