const express= require('express')
const jobsrouter= express.Router()
const {getAllJobs,getJob,createJob,updateJob,deleteJob}=require('../controllers/jobs')

jobsrouter.route('/').post(createJob).get(getAllJobs)
jobsrouter.route('/:id').patch(updateJob).get(getJob).delete(deleteJob)


module.exports=jobsrouter