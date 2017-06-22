import {get} from '../libs/sqlite'

export const getAll = (req) => {
  let dbConfig = req.app.get('config').get('db.test')
  return get(dbConfig, 'SELECT* FROM people;')  
}