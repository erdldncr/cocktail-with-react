import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const[loading,setLoading]=useState(true)
  const [searchTerm,setSearchTerm]=useState('')
  const [cocktails,setCockTails]=useState([])


  const getCocktails=useCallback((url)=>{
    setLoading(true)
    fetch(url+searchTerm)
    .then(res=>res.json())
    .then(res=>{
      if(!res.drinks){
        setLoading(false)
        setCockTails([])
      }else{
        setLoading(false)
       const newDrinks=res.drinks.map(drink=>{
          const{idDrink,strDrink,strDrinkThumb,strAlcholic,strGlass}=drink
          return {id:idDrink,name:strDrink,image:strDrinkThumb,info:strAlcholic,glass:strGlass}
        })
      
        setCockTails(newDrinks)
      }
    }).catch(res=>{
      setLoading(false)
      console.log(res)
    })
  },[url])
  useEffect(()=>{
    getCocktails(url)
  },[searchTerm,getCocktails])

  return <AppContext.Provider value={{cocktails,
    loading,
    getCocktails,
    setSearchTerm}
  }>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
