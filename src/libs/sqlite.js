import config from 'config'
import sqlite3 from 'sqlite3'

export const db = new sqlite3.Database(config.get('db.test'))

export const get = (sql) => {
  return new Promise((a, r)=> {
    db.all(sql, (err, rows) => {
      db.close()
      if (err) {
        return r(err)
      }
      a(rows)
    })
  })
}