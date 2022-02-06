import React from 'react';
import {AllMenu} from './AllMenuContext'
import Navbar from './Navbar';
import { HashRouter,Route,Routes} from 'react-router-dom'
import About from './About';
import Home from './Home';

function Menu() {
    
    
   

  return(
   <div>
<HashRouter  >
    
      <AllMenu>
        
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
       
    </Routes>
    
    </AllMenu>
 </HashRouter>
       
   </div>
)}

export default Menu;
