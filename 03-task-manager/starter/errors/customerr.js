
class customErrors extends Error{
    constructor(message,statusCode){
        super(message)
        this.statusCode=statusCode
    }
}

const customErrorCreator=(message,statusCode)=>{
    return new customErrors(message,statusCode)
}
module.exports= {customErrorCreator,customErrors}