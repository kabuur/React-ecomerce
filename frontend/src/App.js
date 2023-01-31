import React, { useState } from 'react'
import Products from './components/products'
import {BrowserRouter as Router ,Route,Routes} from'react-router-dom';
import UserReg from './components/forms/userReg';
import Des from './components/des';
import './App.css'
import Login from './components/forms/login';
import Order from './components/order';
import Nav from './components/nav';
import Tr from './components/tr';
function App() {
 
  return (
    <div className='main'>
      
      
  
      <Router>
      <Nav/>
      <center className='main-container'>
        <Routes>

          <Route path='/' element={<Products/>}></Route>
          <Route path='/des/:id' element={<Des/>}></Route>
          <Route path='/userReg' element={<UserReg/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/Order' element={<Order/>}></Route>
          <Route path='/tr' element={<Tr/>}></Route>
          
      

        </Routes>
        </center>
      </Router>
      
    </div>
  )
}

export default App