const asynctc=(fn)=>{//asynctrycatcher
    return async (req,res,next)=>{
        try {
            await fn(req,res)
        } catch (error) {
            next(error)
        }
    }
}
module.exports= asynctc