const express= require('express');// initialization and depackaging express module 
const app= express();
const port = 3000

//midware
app.use(express.static('./public'))//to access extra sources, html css etc
app.use(express.urlencoded({ extended: false }))//to access json data
app.use(express.json())//to parse json data


//routers and usage
routes=require('./router/tasks')
app.use('/api/v1/tasks',routes)


app.listen(port,()=>{ ///port listening 
    console.log(`Listening port ${port}`)
})