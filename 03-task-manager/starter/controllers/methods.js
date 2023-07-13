//controllers to store all funcs inside methods
const taskget=(req,res)=>{
    res.status(200).send('All Tasks')
}
const taskpost=(req,res)=>{
    res.status(200).json(req.body)
}

const idget=(req,res)=>{
    res.status(200).json({id:req.params.id})
}
const idpatch=(req,res)=>{
    res.status(200).json({id:req.params.id})
}
const iddelete=(req,res)=>{
    res.status(200).json({id:req.params.id})
}
module.exports={taskget,taskpost,idget,idpatch,iddelete}