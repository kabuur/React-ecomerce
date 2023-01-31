import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import  './css/product.css'
export  function  Data (){
  
  let [product, setProduct] = useState([])
  useEffect(()=>{
    const fetching = async()=>{
      const xog = await axios.get('/api/displayProduct');
      const result = xog.data;
      setProduct(result);
    }

    fetching()
  },[])
 
  return product
}





function Products() {
 const product = Data();


 const images = [
  {image:"/images/airpods.jpg",name:'Airpods Wireless Bluetooth Headphones'},
  {image:"/images/alexa.jpg", name:'Amazon Echo Dot 3rd Generation'},
  {image:"/images/camera.jpg", name:'Cannon EOS 80D DSLR Camera'},
  {image:"/images/mouse.jpg",name:'Logitech G-Series Gaming Mouse'},
  {image:"/images/phone.jpg", name:'iPhone 11 Pro 256GB Memory'},
]
const [imge , setImg] = useState('');
let length = images.length-1

useEffect(() => {

  setImg(images[length])
  const time = ()=>{
      setTimeout(() => {
          setImg(images[length])
          
          if(length === 0){
              length = images.length
          }
          length = length -1
          time()
        }, 6000);

        
  }
  time()

}, []);
const styling = {
backgroundImage: `Url(${imge.image})`,

backgroundSize: 'cover',
color: 'white',
width: "300px",
height: "300px",
borderRadius: "50%"

}

  return (  
    <div className='main-product'>
      <div className="container-slide">
        <div className='name-slades'>
          <h2>{imge.name}</h2>
        </div>
        <div  style={styling} >
           
        </div>

      </div>
      <div className="latest">
        <h1>LATEST PRODUCTS</h1>
      </div>
       
      <div className='product'>
      {
        product.map(e=>(
          <div className='card'>    
            <img src={e.productImage} className='cart-image' alt=""/>
            <h5>{e.ProductName}</h5>
            <h3 className='price'> ${e.productPrice}</h3>
            <Link to={`des/${e._id}`}><button className='btn'>BUY NOW</button></Link>
    
          </div>
        )
        )
      }
    </div>
    </div>
  )
}
export default Products 