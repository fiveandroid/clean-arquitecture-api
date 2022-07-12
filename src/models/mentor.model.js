const mongoose = require("mongoose")

// Schemas
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true
  },
  edad: {
    type: Number,
    min: 18,
    max: 150
  },
  sexo: {
    type: String,
    enum: ["f", "m", "o"]
  },
  modulos: {
    type: [String]
  },

 
})

// Koder -> modelo -> 1cosa
// Arreglo -> 1cosa que tiene muchas cosas
// Objeto -> 1cosa con muchas cosas
// Exportar
module.exports = mongoose.model("mentors", mentorSchema)