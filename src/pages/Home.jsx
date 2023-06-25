import React from 'react'
import './Home.css'
import spot from '../assets/spot.png'

function Home() {
  return (
    <div className="container">
    <nav className="navi"><div class="imgd"><img src={spot} alt=""/></div>
        
        <ul>
        <li>Premium</li>
        <li>Help</li>
        <li>Download</li>
        <li>|</li>
        <li>Sign up</li>
        <li>Log in</li>
    </ul></nav>
    <div className="top_circle">
      <div className="inner">
        <h2>Music for everyone.</h2>
        <p className='p'>Millions of songs. No credit card needed.</p>
        <button className="spotify">GET SPOTIFY FREE</button>
    </div></div>
        <div className="left_circle"></div>
        <div className="middle_circle"></div>
        <div className="right_circle"></div>
        
    </div> 
  )
}

export default Home