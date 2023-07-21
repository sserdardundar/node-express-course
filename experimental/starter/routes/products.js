const express= require('express')
const router= express.Router()

const {getAllProducts}=require(`../controllers/products`)//getting controllers

router.get('/',getAllProducts)

module.exports=router