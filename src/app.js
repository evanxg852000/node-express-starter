/* References
  https://nodejs.org/en/
  https://expressjs.com
  https://mozilla.github.io/nunjucks/
  https://github.com/lorenwest/node-config
  https://github.com/expressjs/csurf
  https://github.com/expressjs/morgan
  https://github.com/jaredhanson/connect-flash

  ... add more ...
  
*/

import path from 'path'

import config from 'config'
import express from 'express'
import nunjucks from 'nunjucks'
import logger from 'morgan'
import favicon from 'serve-favicon'
import body from 'body-parser'
import cookie from 'cookie-parser'
import session from 'express-session'
import flash from 'connect-flash'
import passport from 'passport'
import validator from 'express-validator'

import boot from './boot'
import filters from './filters'
import routes from './routes'

/* boostrap the app */
const app = boot(express, config)

/* setup middlewares */
app.use(favicon(path.join(__dirname, 'public', 'favicon.png')));
app.use(logger('dev'))
app.use(body.json())
app.use(body.urlencoded({extended: true}))
app.use(validator())
app.use(cookie(config.get('secret.cookie')))
app.use(session({secret: config.get('secret.session'), cookie: {secure: (app.get('env') === 'production')}}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())
app.use('/public', express.static(path.join(__dirname, 'public')))


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

export default app;