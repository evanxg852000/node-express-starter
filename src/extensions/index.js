import route from './route'

const installExtentions = (express, config) => {
  route(express, config)

  /*  add more extensions to express and initialise them here */

}

export default installExtentions