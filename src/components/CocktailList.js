import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const{cocktails,loading}=useGlobalContext()
    console.log(cocktails)
  return (
    <div>
      {loading&&<Loading/>}
      {cocktails?.length===0&& <h2 className="section-title">
      no cocktails matched your search
      </h2>  }
      
      {   <section className="section">
          <h2 className="section-title">
            cocktails
          </h2>
          <div className="coctails-center">
       {   cocktails.map(cocktail=> <Cocktail key={cocktail.id} {...cocktail}/> )}
          </div>
        </section>
     }
    </div>
  )
}

export default CocktailList
