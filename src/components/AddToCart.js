import React from 'react';
import './AddToCart.css'
function AddToCart(props) {
  let cartItems=  props.cartItem.map((item)=>{
        return (
            <div className='items'>
                <img src={item.img} alt='cart'/>
                <p>{item.title}</p>
            </div>
        )
    })

  return (
    <div className='add-to-cart'>
      <h2>Cart items</h2>
      <div className='items-container'>
        {cartItems}
          
      </div>
      <i class="far fa-times-circle cart-close"  onClick={props.closeCart}>click to close</i>
    </div> 
  )
  
}

export default AddToCart;
