import React,{createContext,useState,useEffect} from 'react';
import Loading from './Loading';
export const AllMenuContext=React.createContext()
export function AllMenu(props) {
    const[menu,setMenu]=useState([])
    const[loading,setLoading]=useState(true)
  

// all menu items
    async function getAllMenus(){
        let responce= await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=b");
        let data= await responce.json();
         setMenu(data.meals)
         setLoading(false)
    }
// use effect for calling api
    useEffect(()=>{
        getAllMenus()
        
    },[])

  return <AllMenuContext.Provider value={menu}>
          
           { !loading ?
            props.children : <Loading/> }
        </AllMenuContext.Provider>;
}


