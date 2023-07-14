const express= require('express');// initialization and depackaging express module 
const app= express();
const port = 3000
const routes=require('./router/tasks')
const connectDB=require('./database/connect.js')
require('dotenv').config()
const notFound=require(`./midware/not_found`)
const errhandler=require('./midware/error-handler')
//midware

app.use(express.static('./public'))//to access extra sources, html css etc
app.use(express.json())//to parse json data
//database usage 


//routers and usage

app.use('/api/v1/tasks',routes)
app.use(notFound)
app.use(errhandler)
const spin= async ()=>{
    try {
        await connectDB(process.env.mongostr)
        app.listen(port,()=>{ ///port listening 
        console.log(`Listening port ${port}`)
})
    }
    catch(err){
        console.log(err)
    }
}

spin()