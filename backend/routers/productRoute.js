import express from 'express'
import products from '../models/productModel.js';
import data from '../data.js';

const productRoute =  express.Router();

productRoute.get('/iproduct',async(req, res)=>{
    // await products.remove({});
    const xog = products.insertMany(data.product)
    res.send({xog});
    res.send("hhhh")
})

productRoute.get('/displayProduct', async(rew, res)=>{
    const display = await products.find();
    res.send(display);
})

export default productRoute