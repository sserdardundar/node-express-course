require('dotenv').config()
//async errors 
require("express-async-errors")
const express= require("express")
const app= express()
const port=process.env.PORT||3000
const connectDB=require('./db/connect')
const notFoundMiddleware=require('./middleware/not-found')
const errorMiddleware=require('./middleware/error-handler')
const router=require(`./routes/products`)
//express middleware
app.use(express.json())

//homepage 
app.get('/',(req,res)=>{
    res.send(`<h1>Store API</h1><a href="/api/v1/products">products route </a>`)
})


//router
app.use(`/api/v1/products`,router)

//products route 


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const start = async ()=>{
    try {
        //connect DB
        await connectDB(process.env.mongostr)
        app.listen(port,()=>{
            console.log(`listening port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }


}
start()