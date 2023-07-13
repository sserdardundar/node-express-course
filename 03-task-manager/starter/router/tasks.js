const express= require('express')
const app=express.Router()//to make a router 
//get controller funcs
const {taskget,taskpost,idget,idpatch,iddelete}=require(`../controllers/methods.js`)

//use controllers
app.get('/',taskget)
app.post('/',taskpost)
app.get('/:id',idget)
app.patch('/:id',idpatch)
app.delete('/:id',iddelete)
//export routers
module.exports=app