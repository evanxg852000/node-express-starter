import installExtentions from './extensions'
import configure from './core/passport'

const boot = (express, config) => {
  installExtentions(express, config)
  const app = express()
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) /* trust first proxy */
  }
  
  app.set('config', config)
  
  /* run configure passport */
  /* initialise anything here */
  
  return app
}

export default boot