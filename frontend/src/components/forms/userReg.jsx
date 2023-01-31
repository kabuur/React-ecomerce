import axios from 'axios';

import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/reg.css'
import { Navigate } from 'react-router-dom';

function UserReg() {
    const navaigator = useNavigate()
    const[ name, setname] = useState('')
    const [ userName , setusername] = useState('')
    const[password , setpassword] = useState('')
    const [tell, settell ] = useState('')
    const [err, setError] = useState('')

    const AddUser = async()=>{
        if(name === "" && userName === "" && password === "" && tell === ""){
            setError("oop!  missing some Data!!")
        }
        else{
            await axios.post('/api/insert/user',{
                name,
                userName,
                password,
                tell
            }).then((rest)=>{
                
            }).catch((err)=>{
                alert("error occur")
            })
            navaigator('/login')
        }
        
    }



  return (
    <div className='main-reg-form'>
        <div className='container-reg-form'>
            <h2>Regestration Form</h2>
            <div  className='form'>
                <p>{err}</p>
                
                    <input type="text" placeholder='Name' name="name" id="name" required onChange={(e)=> setname(e.target.value)} /><br/>
                

               
                    <input type="text" placeholder='User Name' name="userName" id="userName" required onChange={(e)=> setusername(e.target.value)} /><br/>
                

        
    
                    <input placeholder='Password' type="password" name="password" id="password" required onChange={(e)=> setpassword(e.target.value)} /><br/>
                

                
                    <input type="text" placeholder='Phone' name="tell" id="tell" required onChange={(e)=> settell(e.target.value)}  /><br/>
                

              <button onClick={()=>{AddUser()}}>sign up</button>
            </div>
        </div>
    </div>
  )
}

export default UserReg