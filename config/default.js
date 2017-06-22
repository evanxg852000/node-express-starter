// https://github.com/lorenwest/node-config

// using defer to compose config
const defer = require('config/defer').deferConfig;

const config = {
  admin: {
    name: "Evance Soumaoro",
    email: 'evanxg852000@gmail.com'
  },
  db: {
    test: './db.sqlite3',
    host: '127.0.0.1',
    port: 5984,
    name: 'customers'
  },
  mail: {
    protocol: 'smtp',
    port: 25,
    sender: defer((config) => {
      return `${config.admin.name} <${config.admin.email}>`
    })
  }

}

module.exports = config