import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='home'>
      <div className='top_banner'>
        
        <div className = 'contant'>
          <h3>Cottage core</h3>
        <h2>Cozy & Pretty</h2>
        <p>25% off at your first purchase!</p>
        <Link to="/">Shop Now</Link>

        </div>
        

      </div>
    </div>
    </>
  )
}

export default Home