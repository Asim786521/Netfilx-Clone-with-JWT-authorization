import styles from "./styles.module.css";
import {originals,action} from '../../urls' 
import RowPost from '../Rowpost/RowPost';
import Banner from '../Banner/Banner';
import Navbar from "../Navbar/Navbar";
import { useNavigate} from "react-router-dom";
import React, { useEffect, useState } from "react";
import jwt_decode from 'jwt-decode'
import axios from '../../axios'
const Main = () => {
	const navigate = useNavigate();
	const[access_Token,SetAccess_Token]=useState([""])
	const[name,SetName]=useState('')


 
		
   


 	useEffect(() => {  
	const token = localStorage.getItem('token'); 	
		if(token){
			SetAccess_Token(token)
	   console.log("token is ",token);
		   
		}else {
		   console.log("token not found");
		   navigate("/login")  
		}

	


	
try {
const url = "http://localhost:8080/api/auth";
		
			  axios.get(url).then((response)=>{
				console.log(' ',response.data);
                   SetName(response.data.data)
			  })

			} catch (err) {
				console.log(err);
			  }

			
		 
		
	},[])

	function isAuthenticated() {
		const token = localStorage.getItem('token');
	 
		try {
			let payload=jwt_decode(token);
		  	
		  if (Date.now() >= payload.exp * 1000 ) {
			alert("token expired");	
			navigate('/login')
			return false;
	
		  }
		} catch (err) {
		  return false;
		}
		return true;
	  }

	  isAuthenticated()
	// const token_acc = localStorage.getItem('token'); 	
	//  let payload =jwt_decode(token_acc);
	// 	if (payload.exp * 1000< Date.now() ) {

	// 	  localStorage.removeItem('token')
	// 		 alert("Your token has expired!")
	// 		  console.log("token exp");
	// 		  navigate("/login")  
	// 		}
	 


 
	return (
	 
		  <div>
           { access_Token ? ( 
         <div className={styles.main_container}  >
          <Navbar token={access_Token} name={name} />
			 
	 
	  
			 <Banner/>
			 <RowPost  token={access_Token}  url={originals}   title='Netflix Originals'/>,
			 <RowPost  token={access_Token}   url={action}   title='Action' isSmall/> 
			  
	  
        </div>) :
        
        (<div>
         
        </div>)
           }
        </div>
	 	 

		
	)
};

export default Main;
