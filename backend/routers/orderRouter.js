import express from 'express'
import order from '../models/orderModel.js';
import data from '../data.js';

const orderRoute = express.Router();

orderRoute.get('/create/order', async(req, res)=>{
    await order.remove({});
    const add =  await order.insertMany(data.order)
    res.send(add);
})

orderRoute.get('/find/order/:orderUserId',async(req, res)=>{
    const display = await order.find({
        orderUserId:req.params.orderUserId
    });
    res.send(display);
})

orderRoute.post('/insert/order', async(req,res)=>{
    const insertOrder = await order.insertMany({

        orderUserId: req.body.orderUserId,
        orderImage: req.body.orderImage,
        orderPrice: req.body.orderPrice,
        orderQty:   req.body.orderQty,
        orderProductName:   req.body.orderProductName,
        orderProductId: req.body.orderProductId
    })
})

orderRoute.delete('/delete/order/:id', async(req, res)=>{
    await order.remove({
        _id:req.params.id
    })
    res.send("one user are deleted")
})


export default orderRoute;