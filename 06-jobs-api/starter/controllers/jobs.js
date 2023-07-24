const Job=require('../models/Job')
const {StatusCodes}=require('http-status-codes')
const {BadRequestError,NotFoundError}=require('../errors')

const getAllJobs= async (req,res)=>{
    const jobs= await Job.find({createdBy:req.user.userId}).sort('createdAt')
    res.status(StatusCodes.OK).json({jobs,count:jobs.length})
}
const getJob= async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const job=await Job.findOne({_id:jobId,createdBy:userId})
    if(!job){
        throw new NotFoundError('No job found with that ID')
    }
    res.status(StatusCodes.OK).json({job})
}
const createJob= async (req,res)=>{
    req.body.createdBy=req.user.userId
    const job=await Job.create(req.body)
    res.status(StatusCodes.CREATED).json({job})
}
const updateJob= async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const job=await Job.findOneAndUpdate({_id:jobId,createdBy:userId},req.body)
    if(!job){
        throw new NotFoundError('No job found with that ID')
    }
    res.status(StatusCodes.OK).json({job})
}
const deleteJob= async (req,res)=>{
    const {user:{userId},params:{id:jobId}}=req
    const success=await Job.findOneAndDelete({_id:jobId,createdBy:userId})
    if(!success){
        throw new NotFoundError('No job found with that ID')
    }
    res.status(StatusCodes.OK).json({msg:"deletion success"})
}


module.exports={
    getAllJobs,
    getJob,
    createJob,
    updateJob,
    deleteJob
}