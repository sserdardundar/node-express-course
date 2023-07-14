const express= require('express')
const app=express.Router()//to make a router 
//get controller funcs
const {getAllTasks,createTask,getTask,updateTask,deleteTask}=require(`../controllers/methods.js`)

//use controllers
app.get('/',getAllTasks)
app.post('/',createTask)
app.get('/:id',getTask)
app.patch('/:id',updateTask)
app.delete('/:id',deleteTask)
//export routers
module.exports=app