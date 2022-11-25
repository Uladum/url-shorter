import mongoose from 'mongoose'

const URI = process.env.URI

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Database is connected'))
  .catch(err => console.error('Error in DB Mongo =>', err))