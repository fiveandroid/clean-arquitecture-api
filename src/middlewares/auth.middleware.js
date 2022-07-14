const jwt = require("../lib/jwt.lib")

const auth = ( request, response, next ) =>{

    try{
        const authorization =  request.headers.authorization || ""
        const token =  authorization.replace("Bearer ", "")

        //Verificamos el token
        const verifiedToken = jwt.verify(token)

        request["userId"] = verifiedToken.id
        console.log( request.headers )
        console.log(verifiedToken)
        next()
    }
    catch(error){
        response.status( error.status || 401 )
        response.json({
            success: false,
            error: error.message
        })

    }
}



module.exports = auth
