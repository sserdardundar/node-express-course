//controllers to store all funcs inside methods
const Task=require(`../models/tasks`)

const getAllTasks=async (req,res)=>{
    try
    {const tasks= await Task.find()
    res.status(200).json({tasks})}
    catch(err){
        res.status(500).json(err)
    }
}
const createTask=async (req,res)=>{
    try{
    const task=await Task.create(req.body)
    res.status(201).json({task})
    }
    catch(err){
        const {message}=err
        res.status(500).json(message)
    }
}

const getTask=async (req,res)=>{
    try
    {
    const id=req.params.id
    const task = await Task.findOne({_id:id})
    if(task){
        return res.status(200).json({success:true,data:task})
    }
    return res.status(404).json({success:false,reason:`No such file`})}
    catch(err){
        res.status(500).json(err)
    }

}
const updateTask=async (req,res)=>{
    id=req.params.id
    try{
    const task = await Task.findOneAndUpdate({_id:id},req.body,{new:true,runValidators:true}) 
    if(task){
        return res.status(200).json({success:true,data:task})
    }
    return res.status(404).json({success:false,reason:`No such file`})
    }
    catch(err){
        res.status(500).json(err)
    }
}
const deleteTask=async (req,res)=>{
    const id=req.params.id
        try{
        const task =await Task.findOneAndDelete({_id:id})
        if(task){
        return res.status(200).json({success:true})}
        else{
            return res.status(404).json({success:false,msg:`No task with id:${id}`})
        }
        }
        catch(err){
    return res.status(404).json({error:err.name,msg:err.message})
        }
}
module.exports={getAllTasks,createTask,getTask,updateTask,deleteTask}