import {get} from '../libs/sqlite'

export const getAll = () => {
  return get('SELECT* FROM people;')  
}