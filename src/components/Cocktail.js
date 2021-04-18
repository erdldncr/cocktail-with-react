import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({name,image,id,info,glass}) => {
  return (
    <article className="coctail">
      <div className="img-containe">
      <img src={image} alt={name}/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary' >More Details</Link>
      </div>
    </article>
  )
}

export default Cocktail
