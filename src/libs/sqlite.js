import sqlite3 from 'sqlite3'

export const get = (dbfile, sql) => {
  const db = new sqlite3.Database(dbfile)
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
