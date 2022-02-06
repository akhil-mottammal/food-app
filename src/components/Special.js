import React,{ useContext, useState} from 'react';
import CardDish from './CardDish';
import Popup from './Popup';
import './Special.css'
import {AllMenuContext} from './AllMenuContext'
import AddToCart from './AddToCart';
function Special(props) {

    

    let dishItems=8;
    const[odrBtn,setOdrBtn]=useState("Order now")
    let [popDish,setPopDish]=useState('')
    let [popup,setPopup]=useState(false)
    let[cartItem,setCartItem]=useState([])
    let [cart,setCart]=useState(false)
    const allMenu=useContext(AllMenuContext)
     
    function showPopUp(item){
        setPopup(true)
        setPopDish(item)
    }
     
    //add to cart
    const addToCart=(link,title)=>{
       setOdrBtn("ordered")
        setCart(true)
       setCartItem([...cartItem,{
        "img":link,
         "title":title
       }])
    }
    const closeCart=()=>{
        setCart(false)
        setCartItem([])
      }

    let dishes=allMenu.map((item,index)=>{
     if(index < dishItems){
        return(
            <CardDish key={index} showPopUp={showPopUp} popup={setPopup} item={item}/>
        )
        
     }
        
    })
  return (<div className='special'>
            {popup &&<Popup  popup={setPopup} popDish={popDish} addToCart={addToCart}  odrBtn={odrBtn}/>}
             <div className='special-content'>
              <h2>Special dishes</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              
             </div>
             <div className='special-dishes'>
             {dishes}
             </div>
             {cart && <AddToCart cartItem={cartItem} closeCart={closeCart}/>}
          </div>);
}

export default Special;
