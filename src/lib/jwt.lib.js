const jwt = require('jsonwebtoken')

const { JWT_SECRET } = process.env 

const sign = ( payload = {} ) =>{

    return jwt.sign( payload,  JWT_SECRET, { expiresIn: "5h"} )

}

// Verificar que el token este bien

const verify = ( token ) =>{
    return jwt.verify( token, JWT_SECRET )
}

module.exports = { sign, verify }