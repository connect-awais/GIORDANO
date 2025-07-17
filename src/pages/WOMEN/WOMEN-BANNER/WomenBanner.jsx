import React from 'react'
import './WomenBanner.css'
import WomenBannerImg from '../../../assets/WOMEN-IMG/BANNER/WomenBanner.webp'

import WomenHero from '../WOMEN-HERO/WomenHero'
const WomenBanner = () => {
  return (
    <div>
      <div className="men-banner">
      <img src={WomenBannerImg} loading="lazy" alt='banner'/>
      </div>

      <WomenHero/>
    </div>
  )
}

export default WomenBanner