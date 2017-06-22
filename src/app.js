/* References
  https://nodejs.org/en/
  https://expressjs.com
  https://mozilla.github.io/nunjucks/
  https://github.com/lorenwest/node-config

  ... add more ...
  
*/

import path from 'path'

import config from 'config'
import express from 'express'
import bodyParser from 'body-parser'
import nunjucks from 'nunjucks'

import boot from './boot'
import filters from './filters'
import routes from './routes'

/* boostrap the app */
const app = boot(express, config)

/* setup middlewares */
app.use('/public', express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

/* setup view engine */ 
nunjucks.configure(path.join(__dirname, 'views'), {autoescape: true, express: app})

/* setup filters and routes */
const router = express.Router()
filters(config, app, router)
routes(config, app, router)

/* ready! all set! goooooo! */
let port = config.has('port')? config.get('port') : 8000
app.listen(port, () => {
  console.log(`Server started and listenning on port: ${port}`)
})