
const filters = (config, app, router) => {

  app.use((err, req, res, next) => {
    res.status(500).send('Oops! Something broke.')
  })

  /* add your filters here */
  
}

export default filters;