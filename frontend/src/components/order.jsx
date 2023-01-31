import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { userID } from './forms/login'
import { Link, useNavigate } from 'react-router-dom'
import './css/order.css'
function Order() {
  const ID = userID
  let price = 0;
  let item = 0;
  const [order, setorder] = useState([]);
 

    const fetchOrder = async ()=>{
            const orders = await axios.get(`/api/find/order/${ID}`)
            const xog = orders.data
            setorder(xog)
    }
    fetchOrder()
    
  const Delete = async (del)=>{
    const de = await axios.delete(`/api/delete/order/${del}`)
  }
  
  return (
    <div className='main-order'>
      <div className='container-order'>
        
        <div className="car-container">
            {
            order.map(e=>(
              price += e.orderPrice,
              item += e.orderQty,
              <div className='card'>

                <div className='img-name'>
                  <img src={e.orderImage} alt="" />
                  <h5>{e.orderProductName}</h5>
                </div>

                <div className='order-price'>
                  <p>${e.orderPrice}</p>
                </div>
                <div className="qty-delety">
                  <p>qty {e.orderQty}</p>
                  <button onClick={()=>Delete(e._id)}>Delete</button>
                <Link to='/'> <button onClick={()=>Delete(e._id)}>Add </button></Link> 
                </div>
                
              </div>
              
            )
            
            )
            }
          </div>

          <div className="card-process">
            <h4>SUMTOTAL ( {item} ) ITEM</h4>
            <p> TOTAL:  ${price}</p>
            <hr />
            <button>CHECKOUT</button>
          </div>
       </div>
    </div>
  )
}

export default Order