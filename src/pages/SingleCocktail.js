import React,{useEffect,useState} from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
 const{id}=useParams()
 const [drink,setDrink]=React.useState([])
 const [loading,setLoading]=React.useState(true)
 useEffect(()=>{
  setLoading(true)
  fetch(url+id)
  .then(res=>res.json())
  .then(res=>{
    
  const{strDrink:name,
    strDrinkThum:image,
    strGlass:glass,
    strAlcoholic:info,
    strCategory:category,
    strInstructions:instructions,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5
  }=res.drinks[0]

    setLoading(false)
    setDrink({name,image,glass,info,category,instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5})
    
 })
},[id])
const{name,image,glass,info,category,instructions,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5}=drink
  return (
    <div>
      {loading&&<Loading/>}
        <section className="section cocktail-section">
          <Link to='/' className='btn btn-primary' >back home</Link>
          <h2 className="section-title">{name}</h2>
          <div className="drink">
            <img src={image} alt={name}/>

          </div>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span>
              {name}
            </p>
            <p>
              <span className="drink-data">category :</span>
              {category}
            </p>
            <p>
              <span className="drink-data">info :</span>
              {info}
            </p>
            <p>
              <span className="drink-data">glass :</span>
              {glass}
            </p>
            <p>
              <span className="drink-data">instructions :</span>
              {instructions}
            </p>
            <p>
              <span className="drink-data">
                  Ingredients:
              </span>
              {strIngredient1}
              {strIngredient2}
              {strIngredient3}
            </p>
          </div>
        </section>
    </div>
  )
}

export default SingleCocktail
