import express, { application } from 'express';
import data from '../data.js';
import user from '../models/usersmodel.js';

const userRout = express.Router();

//creating user
userRout.get('/iuser',async(req, res)=>{

    await user.remove({});
    const xog = user.insertMany(data.user);
    res.send({xog});
})

//inserting user
userRout.post('/insert/user',async(req, res)=>{
  const xog =   await user.insertMany({

        name: req.body.name,
        userName: req.body.userName,
        password: req.body.password,
        tell:  req.body.tell
        

    }).then((reslt)=>{
        res.status(200).json({
            
        })
    }).catch((err)=>{
        res.status(404).json({
            err:err
        })
    })
    res.send(xog)
    
})


//finding user

userRout.get('/find/user/:userName', async(req, res)=>{
    const find = await user.find({userName: req.params.userName})
    res.send(find)
})


export default userRout;