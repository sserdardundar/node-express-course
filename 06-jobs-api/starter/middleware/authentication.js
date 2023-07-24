const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {UnauthenticatedError}=require('../errors')

const auth = async (req,res,next)=>{
    //header check
    const authorization = req.headers.authorization
    if(!authorization||!authorization.startsWith('Bearer ')){
        throw new UnauthenticatedError('Unvalid Authentication ')
    }
    const token= authorization.split(' ')[1]
        //token check 
    try {
        payload = await jwt.verify(token,process.env.JWT_SECRET)
        //attaching user and routes 
        req.user={userId:payload.userId,name:payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authentication Invalid')
    }
}

module.exports= auth