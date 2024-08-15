const express = require('express');
const server = express();
const mongoose = require('mongoose');
const { createProduct } = require('./controller/Product');
const productsRouter = require('./routes/Products')

server.use(express.json())

main().catch(err=>console.log(err))

server.use('/products',productsRouter.router)

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/freekart')
    console.log('database connected')
}

server.get('/',(req,res)=>{
    res.json({status:'success'})
})

server.post('/products',createProduct)

server.listen(8080,()=>{
    console.log('server started')
})