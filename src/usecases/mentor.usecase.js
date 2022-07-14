const Mentor = require("../models/mentor.model")
const { create: generationCreate } = require("./generation.usecase")
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

/**
 * Voy a hacer un endpoint donde yo pueda agregar una generacion.
 * Paso 1- Encontrar el mentor al que se le hare el cambio
 * Paso 2 -Todas las generaciones que no sea la que le este mandando, tienen que pasar a isActive = false
 * Paso 3 - Que la estemos mandando(frontend/insonmia) sea la activa
 * Paso 4 - Actualizar
 * Agrego en mis generacions, la nueva con isActive = true, name, module
 * 
 * Name,
 * module
 * 
 * {
 *  "name": "20Js",
 *  "module": "Enmaquetado"
 * }
 */
 const changeGeneration = async (id, dataGeneration) => {
  // Paso 1
  const mentorFound = await Mentor.findOne({ id }) // Encontramos el mentor

  // Validar si lo encuentra
  if(!mentorFound) throw createError(404, "Mentor not found")

  // Paso 2
  // Si lo encontre, ya manipulamos
  const newGenerations = mentorFound.generations.map((generation) => {
    // Hacer TODAS las generaciones viejitas, isActive == false
    generation.isActive = false
    return generation
  })

  // Paso 3
  newGenerations.push({
    name: dataGeneration.name,
    module: dataGeneration.module,
    isActive: true
  })

  // Paso 4 
  mentorFound.generations = newGenerations

  // Actualizar en la base de datos
  const updatedMentor = await Mentor.findByIdAndUpdate(id, mentorFound, { returnDocument: "after" })


  let dataNewGeneration = {
    name: dataGeneration.name,
    module: dataGeneration.module
  }
  const createGeneration = await generationCreate( dataNewGeneration )

  console.log( createGeneration )
  return updatedMentor
}

module.exports = { getAll, getById, create, update, remove, changeGeneration }


