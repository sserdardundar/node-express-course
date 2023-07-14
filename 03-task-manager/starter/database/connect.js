const mongoose= require('mongoose')

const connectDB=(link)=>{
    return mongoose.connect(link)
}

module.exports=connectDB