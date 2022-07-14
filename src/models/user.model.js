const mongoose = require("mongoose")

// Schemas
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^.*@.*\..*$/,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 3
  },
  name: {
    type: String,
    minLength: 3
  }
})

// Koder -> modelo -> 1cosa
// Arreglo -> 1cosa que tiene muchas cosas
// Objeto -> 1cosa con muchas cosas
// Exportar
module.exports = mongoose.model("users", userSchema)