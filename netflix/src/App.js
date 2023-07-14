 import React from 'react';
 
//import Navbar from './Components/Navbar/Navbar';
 //import {originals,action} from './urls'
 import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import './App.css';
//import Banner from './Components/Banner/Banner';
//import RowPost from './Components/Rowpost/RowPost';
 import Register from './Components/Register/Register'
 import Login from './Components/Login/Login';
 import Main from './Components/Main' 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
 
 
function App() {
  const user = localStorage.getItem("token");

  return (
    <div className="App">
     
 
      <BrowserRouter>  
      <Routes> 
     
      {user && <Route path="/" exact element={ <Main/>} />}
	 
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<Register />} />
			<Route path="/" element={<Navigate replace to="login" />} />
      
  
     {/* <RowPost    url={originals}   title='Netflix Originals'/>,
      <RowPost  url={action} title='Action' isSmall/>  */}
      </Routes>
</BrowserRouter>
      
    
      
    </div>
  );
}

export default App;
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>