/**
 * Ejercicio 1
 * Hacer un middleware global, que me imprima
 * EJ: 
 * 
 * enndpoint request.method
 * 
 * console.log("method", "estamos por un middleware")
 * - GET: "Estamos pasando por un middleware"
 * 
 * Ejercicio 2
 * Hacer PATCH y DELETE de koder.
 */

/**
 * TAREA
 * Collections mentores
 * - > Entities -> Schemas -> Model
 * - > Usecases
 * - > Routes -> 3 Endpoints. Get, GetById, Create, Patch, Delete (cualquiera de esas)
 * - > Middleware que me conecta las rutas
 * - > Mandar REPO
 */
const express = require("express")
const routerKoders = require("./routes/koder.route")
const routerMentors = require("./routes/mentor.route")
const middlewareImprimir = require("./middlewares/generico.middleware")

const app = express();

// Middleware
app.use(express.json())
app.use(middlewareImprimir)

// Middleware de ruta
app.use("/koders", routerKoders)

app.use("/mentors", routerMentors)


/**
 * 
 * Aqui van todos los middlewares
 */

// Endpoint de Home
app.get("/", (request, response) => {
  response.json({
    message: "Endpoint de Home, Bienvenido a nuestra API de clean arquitecture"
  })
})


// Exportar
// module.exports -> nada mas puedes exportar una cosa por archivo
// pero esa cosa puede ser -> objeto, arreglo, funcion, app
module.exports = app