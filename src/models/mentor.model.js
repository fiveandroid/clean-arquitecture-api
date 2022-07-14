const mongoose = require("mongoose")

// Schemas
const mentorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 30
  },
  age: {
    type: Number
  },
  generations: {
    type: [
      {
        // 19Js, un mentor solo puede estar en una generacion activa
        name: String,
        module: String,
        isActive: Boolean
      }
    ]
  }
})

// Koder -> modelo -> 1cosa
// Arreglo -> 1cosa que tiene muchas cosas
// Objeto -> 1cosa con muchas cosas
// Exportar
module.exports = mongoose.model("mentors", mentorSchema)