const {UnAuthed}=require('../errors/index')
const jwt = require(`jsonwebtoken`)

const authMiddleware=async (req,res,next)=>{
    const authheader= req.headers.authorization;
    if(!authheader ||!authheader.startsWith(`Bearer `)){
        throw new UnAuthed('No Token Provided')
    }
    const token= authheader.split(' ')[1]
    try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET)//compares the secret value of token and on our server then if valid gives the payload
        const {id,username}=decoded
        req.user={id,username}
        next()
    }
    catch (error) {
        throw new UnAuthed('Unvalid Token to access this route')
    }
}

module.exports=authMiddleware