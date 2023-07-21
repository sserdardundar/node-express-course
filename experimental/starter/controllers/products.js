'use strict';
const Product= require(`../models/product`)
const fs= require('fs')



const getAllProducts = async (req,res) =>{
    const products = await Product.find()
    let data = JSON.stringify(products)
    fs.writeFileSync('producted.json',data,{flag:'a'})
    res.status(200).json({msg:'Success'})
}
//method funcs for different routes 
module.exports={getAllProducts}