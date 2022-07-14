const Generation = require("../models/generation.model")
const createError = require('http-errors')

const create = ( generationData ) => {

    

    const generation = Generation.create( generationData )



    return generation
  }

module.exports = {  create }