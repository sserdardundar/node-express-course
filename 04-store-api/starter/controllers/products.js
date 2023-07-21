const { filter } = require("lodash")
const Product= require(`../models/product`)


const getAllProductsStatic = async (req,res) =>{
    const products= await Product.find().sort('-name price')
    res.status(200).json({products:products,nbHits:products.length})}
    
    const getAllProducts = async (req,res) =>{
        const queryObject={}
        const {name,featured,company,sort,select,numericFilters}=req.query
        if(name){
            queryObject.name={$regex:name,$options:'i'}
        }
        if(featured){
            queryObject.featured=featured
        }
        if(company){
            queryObject.company=company
        }
        if(numericFilters){
            const operators={
                '>':'$gt',
                '<':'$lt',
                '>=':'$gte',
                '<=':'$lte',
                '=':'$eq',
            }
                const regEx=/\b(<|>|<|>=|<=|=)\b/g
                let filters=numericFilters.replace(regEx,(match)=>`-${operators[match]}-`)
                const options= ['price','rating']
                filters=filters.split(',').forEach((block) => {
                    const [field,operator,value]= block.split('-')
                    if(options.includes(field)){
                        queryObject[field]={[operator]:Number(value)}
                    }
                });

        }
        let result=Product.find(queryObject)
    if(sort){
        const sortList=sort.split(',').join(' ')
       result.sort(sortList)
    }
    else{
        result.sort('name')
    }
    if(select){
        const selectList=select.split(',').join(' ')
        result.select(selectList)
    }
    
    const page= Number(req.query.page)||1
    const limit= Number(req.query.limit)||15
    const skip= (page-1)*limit
        result.limit(Number(limit))
        result.skip(Number(skip))
    
    const products = await result
        
    res.status(200).json({products:products,nbHits:products.length})}

//method funcs for different routes 
module.exports={getAllProducts,getAllProductsStatic}