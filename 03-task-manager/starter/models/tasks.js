const mongoose = require('mongoose');

const taskSchema= new mongoose.Schema({
name:{
    type:String,
    required:[true,`U must pass a name`],
    trim:true,
    maxlength:[25,`No more characters than 25`]
},completed:{
    type:Boolean,
    default:false
}
})
module.exports=mongoose.model('task',taskSchema)