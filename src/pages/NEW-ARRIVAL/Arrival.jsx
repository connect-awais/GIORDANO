import React from 'react'
import './Arrival.css'
import ArrivalBanner from '../../assets/NEW-ARRIVALS/BANNER/BANNER.webp'

import ArrivalHero from './ArrivalHero'
const Arrival = () => {
  return (
    <div>
        <div className="men-banner">
              <img src={ArrivalBanner} loading="lazy" alt='banner'/>
              </div>
              <ArrivalHero/>
    </div>
  )
}

export default Arrival