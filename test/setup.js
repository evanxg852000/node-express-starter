import mongoose from 'mongoose'
import config from 'config'

before((done) => {
  dbConnection = mongoose.connect(config.get('db.test'))
  mongoose.connection.once('open', ()=>{
    done()
  }).on('error', (err)=>{
    console.log('Errro while connecting to db', err)
  })
})
