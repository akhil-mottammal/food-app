import React,{useState}from 'react';

import './Pagination.css'
function Pagination(props) {
   const [clas,setClas]=useState(1)
    


    let numberOfItems=[]
    for(let i=1;i<=Math.ceil(props.dish.length/4) ;i++){
        numberOfItems.push(i)
    }
    
    function pageClick(e){
        setClas(parseInt(e.target.id))
        props.currentPage(e.target.id)
    }
  let pages=  numberOfItems.map((item,length)=>{
        return <button key={length} className={clas===item ? "super" : "demo"} id={item} onClick={pageClick}>{item}</button>
    })

     
  return( <div className='pagination'>
       {pages}
  </div>);
}

export default Pagination;
