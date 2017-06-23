import {protectCsrf} from './middlewares'

import * as homeControler from './controllers/home'
import * as peopleApi from './api/people'

const routes = (config, app, router) => {

  app.get('/', homeControler.home)

  app.get('/form', [protectCsrf], homeControler.form)

  app.group("/api/v1", (router) => {

    router.get('/', peopleApi.index)

    router.get('/people', peopleApi.all)

  })

}

export default routes