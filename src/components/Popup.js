import React, { useContext } from 'react';
import { AllMenuContext } from './AllMenuContext';
import './Popup.css'
function Popup(props) {

  console.log("props",props)
const allMenu=useContext(AllMenuContext)
function closePopup(){
  props.popup(false)
}
 let popItems=allMenu
 
 .filter((item)=>{
    return item.strMeal===props.popDish
 }).map((item)=>{
    console.log(item)
   return (
     
     <div className='popup-detail'>
       <img src={item.strMealThumb} alt='pic'/>
       <div className='content-container'>
       <h2>{item.strMeal}</h2>
       <p>{item.strInstructions}</p>
       <ul className='tags'>
         <li>{item.strIngredient1}</li>
         <li>{item.strIngredient2}</li>
         <li>{item.strIngredient3}</li>
         <li>{item.strIngredient4}</li>
       </ul>
        <button className='odr-btn' onClick={()=>{props.addToCart(item.strMealThumb,item.strMeal)}}>{props.odrBtn}</button>
        </div>
     </div>
   )
 })

  return (<div className='popup'>
   <div className='popup-content'>
       {popItems}
       <i class="far fa-times-circle close" onClick={closePopup}></i>
   </div>
   
  </div>);
}

export default Popup;
