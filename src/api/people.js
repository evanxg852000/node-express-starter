import * as personModel from '../models/person'

export const index = (req, res) => {
  res.send('This is the people api version 1.0.0') 
}

export const all = (req, res) => {
  personModel.getAll(req)
    .then((rows)=>{
      res.send(JSON.stringify(rows))
    })
    .catch((err)=>{
      res.send(JSON.stringify([]))
    })
}