import React from 'react'
import banner from '../assets/supermarketBanner.jpg'
import './Home.css'

function Home() {
    return (
      <div>
        <img src={banner} className='banner'></img>
      </div>
    )
}

export default Home