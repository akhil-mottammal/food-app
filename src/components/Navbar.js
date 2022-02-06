import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (<div className='navbar'>
      <h3>Recipe</h3>
     <div >
         <Link to='/'>Home</Link>
         <Link to='/about'>About</Link>

     </div>
  </div>);
}

export default Navbar