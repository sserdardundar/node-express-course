const {BadRquest, UnAuthed}=require('../errors/index')
const {StatusCodes}=require('http-status-codes')
const jwt = require(`jsonwebtoken`)
const login= async (req,res)=>{
    const {username,password}= req.body
    //can be checked with mongoose's 'required' validation 
    //for this task we use a package named Joi
    //check here and send a custom error

    if(!username||!password){
        throw new BadRquest('username and password must be provided')
    }
    const id= new Date().getDate()
    //for user experience keep payload small 
    //keep secret long complex and unpredictable 
    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(StatusCodes.OK).json({msg:'user created ',token})
}

const dashBoard = async (req,res)=>{
    try {
        const {id,username}=req.user
        const luckyNumbers= Math.floor(Math.random()*100)
        res.status(StatusCodes.OK).json({msg:`Hi ${username}`,secret:`the lucky number is ${luckyNumbers}`})
    } catch (error) {
        throw new UnAuthed('Unvalid Token to access this route')
    }

}

module.exports={login,dashBoard}