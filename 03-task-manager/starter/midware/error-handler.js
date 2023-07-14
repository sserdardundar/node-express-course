const {customErrors}=require('../errors/customerr')
const errhandler=(err,req,res,next)=>{
    if(err instanceof customErrors){
    return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({msg:`Server error sth went wrong`})
}
module.exports = errhandler