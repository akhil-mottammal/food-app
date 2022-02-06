import React,{useContext, useState,useEffect} from 'react';
import CardDish from './CardDish';
import './FilteredDishes.css'
import { AllMenuContext } from './AllMenuContext';
import Pagination from './Pagination';
import Popup from './Popup';
import AddToCart from './AddToCart';

function FilteredDishes(props) {
  const[odrBtn,setOdrBtn]=useState("Order now")
     let [dish,setDish]=useState([""])
     let[active,setActive]=useState("Beef")
     let[currentPage,setCurrentPage]=useState('1')
     let [popup,setPopup]=useState(false)
     let [popDish,setPopDish]=useState('')
     let [cart,setCart]=useState(false)
     let[cartItem,setCartItem]=useState([])
     const[categories,setCategories]=useState([])
    
     const[single,setSingle]=useState([])
//
   const addToCart=(link,title)=>{
     setOdrBtn("odered")
     setCart(true)
      setCartItem([...cartItem,{
        "img":link,
        title:title
      }])

   }

   const closeCart=()=>{
     setCart(false)
     setCartItem([])
   }
     
     
       async function getAllCategories(){
         let responce= await fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
         let data=await responce.json()
         
         setCategories(data.categories)
     }
     
     async function getSingleDish(){
        let responce= await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef");
        let data=await responce.json();
        
        setSingle(data.meals)
     }
 
     useEffect(()=>{
         getAllCategories()
         getSingleDish()
     },[])
     


     
     const allDishes=useContext(AllMenuContext)
    
   // const[itemPerPage,setItemPerPage]=useState("4")
    let itemPerPage=4;
    let lastIndex=currentPage*itemPerPage;
    let firstIndex=lastIndex-itemPerPage;

    let slicedItem=dish.slice(firstIndex,lastIndex)

    function showPopUp(item){
      setPopup(true)
      setPopDish(item)
    }
    
// single beef dishes


   let singleBeef= single.map((item,index)=>{
     if(index<4){
      return(<div className='filtered-img' key={index}>
      <CardDish item={item} showPopUp={showPopUp}/>
      
</div>)
     }
     
    })

     //buttons
    
   let categorie= categories.map((item,index)=>{
       return(<button key={index} className={item.strCategory===active ? "active" : "done"} onClick={()=>{clickHandler(item.strCategory)}}>{item.strCategory}</button>)
    })

    //all menus
     function clickHandler(category){
       setSingle([])
        setActive(category)
        
         const FilteredDishesAre=allDishes.filter((item)=>{
                return category===item.strCategory
            }).map((item,index)=>{
                
                
                    return (
                      <CardDish item={item} showPopUp={showPopUp}/>
            )
                
                
            })
            setDish(FilteredDishesAre)
    }

  return (
  <div className='filtered-dishes'>
    {popup && <Popup    popup={setPopup} popDish={popDish} addToCart={addToCart} odrBtn={odrBtn}/>}
     <div className='filtered-content'>
      <h2>Choose your dishes</h2>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      
     </div>
     
     <div className='filtered-buttons'>
       {categorie}
     </div>
    <div className='filtered-imgs'>
      {singleBeef}
      {singleBeef.length >0 || dish.length>0 ? slicedItem: <div className='alert'>Sorry,Item not found</div>}
    </div>
    <div>
    <Pagination dish={dish} currentPage={setCurrentPage}/>
    </div>
    {cart && <AddToCart cartItem={cartItem} closeCart={closeCart}/>}
    
  </div>);
}

export default FilteredDishes;
