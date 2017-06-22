import installExtentions from './extensions'

const boot = (express, config) => {
  installExtentions(express, config)
  const app = express()

  app.set('config', config)
  
  /* initialise anything here */
  
  return app
}

export default boot