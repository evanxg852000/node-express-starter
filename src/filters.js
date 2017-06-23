
const filters = (config, app, router) => {
  
  /* add your filters here */




  /* last gasp midleware */
  app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
  });

  app.use((err, req, res, next) => {
    if (err.code === 'EBADCSRFTOKEN'){
      res.status(403).send('Form tampered with')
      return
    }
    res.status(err.status || 500)
    res.render('error.html', { 
      message: err.message,
      error: (app.get('env') === 'development') ? err : {} 
    });
  })
  
}

export default filters;