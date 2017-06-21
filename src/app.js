import config from 'config';
import http from 'http';

let adminName = 'ADMIN'
if (config.has('admin.name')) {
  adminName = config.get('admin.name');
}

http.createServer((req, res) => {
  console.log('Please contact the admin: ', adminName);  
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');




/*
https://www.terlici.com/2014/09/15/node-testing.html
http://nodewebapps.com/2017/01/03/13-security-best-practices-for-your-web-application/
https://github.com/pin3da/passport-couchdb
http://nodewebapps.com/

import dotenv from 'dotenv'
if(!process.env.NODE_ENV || process.env.NODE_ENV !== 'production')
  dotenv.load()

console.log('DB', process.env.DB_SERVICE_URL)

import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import ejs from 'ejs'
//import db, {testDb} from './db'
//  testDb()

import {log} from './utils'

//app boostrap
const app = express()

// app middlewares setup
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//test



// set app routes
app.get('/', (req, res) => {
    res.render('home', { message: "Welcome to express ..." }) 
});

app.get('/form', (req, res) => {
  res.render('form') 
})

app.post('/form', (req, res) => {
  console.log(req.body)
  res.redirect('/form')
})




// all engine on!!! ready to takeoff 
app.listen(3000, () => {
  console.log('Server running on port 3000')
});




// var express = require('express')
//   , app = express()

// app.engine('jade', require('jade').__express)
// app.set('view engine', 'jade')

// app.use(express.static(__dirname + '/public'))
// app.use(require('./middlewares/users'))
// app.use(require('./controllers'))

// app.listen(3000, function() {
//   console.log('Listening on port 3000...')
// }) express = require('express')
//   , app = express()

// app.engine('jade', require('jade').__express)
// app.set('view engine', 'jade')

// app.use(express.static(__dirname + '/public'))
// app.use(require('./middlewares/users'))
// app.use(require('./controllers'))

// app.listen(3000, function() {
//   console.log('Listening on port 3000...')
// })

*/