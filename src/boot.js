import installExtentions from './extensions'

const boot = (express, config) => {
  installExtentions(express, config)
  const app = express()
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1) /* trust first proxy */
  }
  
  app.set('config', config)
  



  /* initialise anything here */
  
  return app
}

export default boot