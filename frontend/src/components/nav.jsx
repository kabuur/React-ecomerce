import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/nav.css'


function Nav() {
 
  
  
  return (
    <div className='nav'>
     
        <div className='nav-container'>
            <div className='link'>
                <Link to='/'><h4>React-Ecomerce</h4></Link>
            </div>
            <div className='search'>
              <Link to={`/login`}>
              <div className="link-card">
                <img src="/images/cart.jpg" width='20' alt="" />
                <p>Card</p>
              </div>
              </Link>

                <input type="text"  placeholder='Search Product'/>
                <button id='search' >Search</button>
            </div>

            
        </div>

    </div>
  )
}



export default Nav