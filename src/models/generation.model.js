const mongoose = require("mongoose")

// Schemas
const generationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
    },
  module: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
    }
    
  
})

// Koder -> modelo -> 1cosa
// Arreglo -> 1cosa que tiene muchas cosas
// Objeto -> 1cosa con muchas cosas
// Exportar
module.exports = mongoose.model("generations", generationSchema)