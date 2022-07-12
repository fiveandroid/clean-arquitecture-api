const Mentor = require("../models/mentor.model")
const createError = require('http-errors')

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {

  const mentors = Mentor.find({})

  // Aqui va la logica
  // Si va mas logica se los va a hacer en una promesa pending, y si se opta por usar async/await
  return mentors
}

const getById = (id) => {
  const mentor = Mentor.findById(id)

  if(!mentor) {
    const error = createError(404, "Mentor no encontrado")
    throw error
  }

  return mentor
}

const create = ( mentorData) => {
  const mentor = Mentor.create( mentorData )
  return mentor
}

const update = (id, mentorData) => {
  // Si les llega a pasar findByIdAndUpdate
  const mentor = Mentor.findByIdAndUpdate(id, mentorData, { returnDocument: 'after' })
  return mentor
}

const remove = (id) => {
  const mentor = Mentor.findByIdAndDelete(id)
  return mentor
}
module.exports = { getAll, getById, create, update, remove }


