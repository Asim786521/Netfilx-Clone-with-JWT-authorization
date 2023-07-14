import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { imageUrl,API_KEY } from '../../constants/constants' 
//import Youtube from 'react-youtube';
import ReactPlayer from 'react-player'
import { useNavigate} from "react-router-dom";


function RowPost(props) {
 const [movies, setmovies] = useState([])
 const[urlId,setUrlId]=useState('')
 const[language,SetLanguage]=useState([])
 const navigate = useNavigate();

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      console.log(response.data)
   
    
      setmovies(response.data.results.sort(function(a,b){
        return 0.5-Math.random()
      }))
    }).catch((err)=>{
      alert('Network error',err)
    })
    axios.get(`configuration/languages?api_key=${API_KEY} `).then(response=>{
    
     
      console.log("language",response.data)
  SetLanguage(response.data.sort(function(a,b){
    return 0.5-Math.random()
  }))
    
  },
 )
  
  
   
  },[])
  // const opts = {
  //   height: '390',
  //   width: '100%',
  //   playerVars: {
  //               https://developers.google.com/youtube/player_parameters
  //     autoplay:1,
  //     origin: (`https://www.youtube.com/watch?v=${urlId.key}`),
  
      
 
    
    
   

  
   
    
      
   
  //   },

   
  // };

  

  const handleMovie=(id)=>{
    
      console.log("props token is",props.token);
    console.log(id)
    if(localStorage.getItem('token')===props.token){
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
        console.log(response.data.results[0])
   
      }
    },
  )}else{
      alert('JSON web token not found!!!')
      navigate('/login')
    }
  
  }

  return (

    
      <div className="row"  >
 
     <h2 style={{textAlign:'left',marginleft:'20px',float:'left'}}>{props.title}</h2>
     <h2  style={{textAlign:'right',marginRight:'143px',float:'right'}}>Languages</h2> 
    <select  >
    {language.map((obj ,index)=>
   
   <option key={index}>{obj.english_name}</option>
    )} 
      </select>
      
 {props.token!=="" ? (
     <div className="posters">
    
     {movies.map((obj ,index)=>
   
      <img  onClick={()=>handleMovie(obj.id)}  key={index}   className={props.isSmall ? 'smallPoster' :  "poster"} alt="posters"  src={`${imageUrl+obj.backdrop_path}` }   />
        )}
 

     
   )
   </div>
      ) : (
         <div>token expired</div>
      )}
 
 {urlId && 
 
 
 <ReactPlayer   url= {(`https://www.youtube.com/watch?v=${urlId.key}`)}  width='100%'   
 playing     />
 }


 
     </div>
  )
}

  
 export default RowPost 