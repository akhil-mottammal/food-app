import React from 'react';
import './CardDish.css'
function CardDish(props) {
     console.log("item",props.item)
  return (<React.Fragment>
    <div className='special-dish'>
            <img src={props.item.strMealThumb}  alt='' onClick={()=>{props.showPopUp(props.item.strMeal)}}/>
            <p>{props.item.strMeal}</p>
            </div>
  </React.Fragment>);
}

export default CardDish;
