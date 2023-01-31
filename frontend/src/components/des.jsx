import React from 'react'
import { useParams } from 'react-router-dom';
import { Data } from './products'
import userReg from './forms/userReg';
import { Link } from 'react-router-dom';
import './css/proDesc.css'
import { useState } from 'react';

export let orderData = {};
function Test() {

    const {id} = useParams()
    let product =Data()
    const [qty, setqty]=useState('1');
    let dsc={};


    function fetchData(){
        for(let i = 0; i< product.length; i++){
          if(product[i]._id === id){
            dsc={
              id:product[i]._id, 
              name:product[i].ProductName,
              description:product[i].ProductDescription,
              price:product[i].productPrice,
              image:product[i].productImage,
              qty:qty
            }
            orderData = dsc;
            
          }
    
        }
        
       
      }
      fetchData();
// console.log(orderData)
      

  return (
    
    //product description
    <div className='main-dsc'>
      <div className="go-back-home-btn">
       <Link to='/'><button>Go Back</button></Link> 
      </div>
      <div className='container-dsc'>
        
        <div className='img-dsc'>
        
          <img src={dsc.image} alt ={dsc.description}/>
        </div>

        <div className='details-dsc'>
          <h4>{dsc.name}</h4>
          <hr></hr>
          <p className='price-dsc'>price ${dsc.price}</p>
          <hr></hr>
          <p>{dsc.description}</p>
        </div>

        <div className='add-to-card'>

          <div className='add-to-card-price'>
            <p>price</p>
            <strong><p>{dsc.price}</p></strong>
            
          </div>
          <hr></hr>

          <div className='add-to-card-status'>
            <p>status</p>
            <strong><p>on stock</p></strong>
            
          </div>
          <hr></hr>
          <div className='add-to-card-qty'>
            <p>Qty</p>
              <select name="qty" id="qty" onChange={(e)=> setqty(e.target.value)}>
                <option selected value="1" >1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
              
          </div>
          <hr></hr>
          <div className='ad-to-card-btn'>
           <Link to ='/login'><button>Add To Card</button></Link> 
          </div>
        </div>
        
      </div>
       
    </div>
  )
}


export default Test
