import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { orderData } from '../des'
import '../css/login.css'

import { Link, useNavigate } from 'react-router-dom'

export let userID;
function Login() {
    const obj = {name:"ahmed",age:22}
    const navigate = useNavigate()
    const [ userName , setusername] = useState('')
    const[password , setpassword] = useState('')
    const[err , seterr] = useState('')
   
     


    const find = async ()=>{
        try {
            if(userName === ""  && password === ""){
                seterr("plz enter user name or password")
            }
            else{
                const user =  await axios.get(`/api/find/user/${userName}`)
                const userData = user.data;
                
                if(userData.length > 0){
                    userID = userData[0]._id;
                    
                    if(password === userData[0].password){
                      
                        if(Object.keys(orderData).length == 0){
                            navigate('/order')
                        }
                        else{
                        axios.post('/api/insert/order',{
                            orderUserId:userData[0]._id,
                            orderImage: orderData.image,
                            orderPrice: orderData.price,
                            orderQty:   orderData.qty,
                            orderProductName:orderData.name,
                            orderProductId: orderData.id
                    })
                    
                    navigate('/Order')

                        }
                    

                    }
                    else{
                        seterr("envalied username or password")
                    }
                }
                else{
                    seterr("envalied username or password")
                }
                
            }
        
        }
         catch (error) {
            console.log(error)
        }       
    }


    



  return (
    <div className='main-login'>
        
        <div className='login'>

                <p>{err}</p>
            
                <h4>Loging To Your Account</h4>
                <input type="text" placeholder='User Name' required name='usr' onChange={(e)=> setusername(e.target.value)} /><br />
                <input type="password"  placeholder='Password' required  name ='psw' onChange={(e)=> setpassword(e.target.value)}/><br />
                <button onClick={find} >Login</button>
                <Link to='/userReg'><div className='reg'>Regestar</div></Link>
                
            
        </div>
    </div>
  )
}

export default Login