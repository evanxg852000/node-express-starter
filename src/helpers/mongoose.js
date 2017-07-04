import mongoose from 'mongoose'

mongoose.Promise = global.Promise

export const createConnection = (url) => {
  return mongoose.connect(url)
}