//controllers to store all funcs inside methods
const Task=require(`../models/tasks`)
const asynctc=require('../midware/trycatch')//async try catcher
const {customErrorCreator}= require(`../errors/customerr`)

const getAllTasks=asynctc(async (req,res)=>{
    const tasks= await Task.find()
    res.status(200).json({tasks})})

const createTask=asynctc(async (req,res)=>{
    const task=await Task.create(req.body)
    res.status(201).json({task})
    })

const getTask=asynctc(async (req,res)=>{
    const id=req.params.id
    const task = await Task.findById(id)
    if(task){
        return res.status(200).json({success:true,data:task})
    }
    return next(customErrorCreator(`No such task at this id:${id} `,404))})

const updateTask=asynctc(async (req,res)=>{
    id=req.params.id
    const task = await Task.findByIdAndUpdate(id,req.body,{new:true,runValidators:true}) 
    if(task){
        return res.status(200).json({success:true,data:task})
    }
    next(customErrorCreator(`No such task at this id:${id} `,404))})
const deleteTask=asynctc(async (req,res)=>{
    const id=req.params.id
        const task =await Task.findByIdAndDelete(id)
        if(task){
        return res.status(200).json({success:true})}
        else{
            next(customErrorCreator(`No such task at this id:${id} `,404))}})

module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}