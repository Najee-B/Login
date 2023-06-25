import React from 'react'
import './Home.css'
import spot from '../assets/spot.png'

function Home() {
  return (
    <div class="container">
    <nav class="navi"><div class="imgd"><img src={spot} alt=""/></div>
        
        <ul>
        <li>Premium</li>
        <li>Help</li>
        <li>Download</li>
        <li>|</li>
        <li>Sign up</li>
        <li>Log in</li>
    </ul></nav>
    <div class="top_circle">
        <h2>Music for everyone.</h2>
        <p className='p'>Millions of songs. No credit card needed.</p>
        <button class="spotify">GET SPOTIFY FREE</button>
    </div>
        <div class="left_circle"></div>
        <div class="middle_circle"></div>
        <div class="right_circle"></div>
        
    </div> 
  )
}

export default Home