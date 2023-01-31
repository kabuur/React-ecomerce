import express from 'express'
import productRoute from './routers/productRoute.js';
import mongoose from 'mongoose';
import userRout from './routers/usersRoute.js';
import orderRoute from './routers/orderRouter.js';


const port = 8000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{
    console.log("connected");
}).catch((err)=>{
    console.log(err.message+"errrror");
})


app.use('/api',productRoute);
app.use('/api', userRout);
app.use('/api', orderRoute);



app.get('/', (req,res)=>{
    res.send("hello");
})


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})