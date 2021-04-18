import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
   <section className="error-page section">
     <div className="error-container">
       <h1>Oops! Error Page</h1>
       <Link to='/'>
      <button className="btn">Go back to Home</button>
      </Link>
     </div>
   </section>
  )
}

export default Error
