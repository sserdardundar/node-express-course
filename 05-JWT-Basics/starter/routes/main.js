const express=require('express')
const router=express.Router()

const {login,dashBoard}= require('../controllers/main')


const authMidware=require('../middleware/auth')

router.route('/dashboard').get(authMidware,dashBoard)

router.route('/login').post(login)

module.exports=router