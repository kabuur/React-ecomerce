import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Tr() {
    const images = [
        {image:"/images/airpods.jpg"},
        {image:"/images/alexa.jpg"},
        {image:"/images/camera.jpg"},
        {image:"/images/mouse.jpg"},
        {image:"/images/phone.jpg"},
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
    height: "300px"
}
      
  return (
    
    <div>
        <div  style={styling} >
            name ahmed
        </div>
        
        </div>
    
  )
}

export default Tr