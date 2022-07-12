const Koder = require("../models/koder.model")
const createError = require('http-errors')

// Usecases
// Funciones asincronas -> Regresan una promesa
const getAll = () => {
  const koders = Koder.find({})

  // Aqui va la logica
  // Si va mas logica se los va a hacer en una promesa pending, y si se opta por usar async/await
  return koders
}

const getById = (id) => {
  const koder = Koder.findById(id)

  if(!koder) {
    const error = createError(404, "Koder no encontrado")
    throw error
  }

  return koder
}

const create = (koderData) => {
  const koder = Koder.create(koderData)
  return koder
}

const update = (id, koderData) => {
  // Si les llega a pasar findByIdAndUpdate
  const koder = Koder.findByIdAndUpdate(id, koderData, { returnDocument: 'after' })
  return koder
}

const remove = (id) => {
  const koder = Koder.findByIdAndDelete(id)
  return koder
}
module.exports = { getAll, getById, create, update, remove }


