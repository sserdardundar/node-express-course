const mongoose = require('mongoose')
//model and schema file
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'product name must be typed in']
    }
    ,price:{
            type:Number,
            required:[true,'product price must be typed in']
        }
    ,company:{
            type:String,
            enum:{
                values:['ikea','liddy','marcos','caressa'],
                message:'{VALUE} is not supported'}
    },
    featured:{
        type:Boolean,
        default:false
    },rating:{
        type:Number,
        default:4.5,
        min: 0,   // Minimum allowed value
        max: 5, // Maximum allowed value
        required:[true,'Min:0 Max:5 rating is accepted']
        
    }
    ,createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports=mongoose.model('Products',productSchema)