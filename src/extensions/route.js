
const route = (express, config) => {
  express.application.group = express.Router.group = function (path, callback) {
    if (!callback) {
        callback = path
        path = "/"
    }

    let router = express.Router();
    callback(router)
    this.use(path, router)
    return router
  }  
}

export default route