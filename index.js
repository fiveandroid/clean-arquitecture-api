require('dotenv').config()
const server = require('./src/server');
const mongoose = require('mongoose')
console.log( "Process.env", process.env )
 

const  {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_NAME
} = process.env

//Levanta el servidor

// Conexion a la BD
mongoose.connect( `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)
.then( () =>{
    console.log("** Se conecto a la bd")

    //Levanta el servidor
    server.listen(8080,()=>{

        console.log("** Servicio Activo en puerto 8080 ")

    })

}).catch( (err) =>{
    console.log("No se pudo conectar a la bd", err )
})





server.get("/koders", async (request, response) =>{

    // Vamos a utilizar el modelo para aceder a nuesta bd

    const koders = await Koders.find({})

    console.log( "koders", koders )

    response.status( 200 )
    response.json( koders )


})