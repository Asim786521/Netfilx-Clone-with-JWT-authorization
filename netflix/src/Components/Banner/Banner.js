import React, { useEffect, useState } from 'react'
 
import {API_KEY,imageUrl} from '../../constants/constants'
 import axios from  '../../axios'
 import './Banner.css'
 import "react-responsive-carousel/lib/styles/carousel.min.css";  
 import { Carousel } from 'react-responsive-carousel';
 
  
function Banner() {

  const [movie, setmovie] = useState([{}])
useEffect(() => {
  
  axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log("banner",response.data)
    setmovie(response.data.results.sort(function(a,b){
      return 0.5-Math.random()
    }))
  }).catch((err)=>{
    alert('Network error',err)
   
  })

  
}, [ ])
 
  return ( 


    
     <div div className='banners'>
   <Carousel autoPlay   interval="4000" transitionTime="1000" infiniteLoop>
     {movie.map((obj ,index)=>


  
     
   
<div   className='banner'  style={{ backgroundImage: `url(${ imageUrl+obj.backdrop_path })` }}
             src={`${imageUrl+obj.backdrop_path}` }
             alt=""
             key={{index}}   >
 
    
 

      
    
        
        
       
       
         <div className="content">
          <p className='title'>{movie?obj.title:""}</p>
          <div className="banner_buttons">

          
            <button className="button">play</button>
            <button className="button">My list</button>
          </div>
          <h1 className="description"> {movie ? obj.overview : '[]'} </h1>





        </div>


    



      
    </div>
    
   )}</Carousel>
   </div>
   
   )

   
}

export default Banner