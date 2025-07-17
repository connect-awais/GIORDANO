import React from 'react'
import './JunniorBanner.css'
import JuniorBanner from '../../../assets/JUNIOR-IMG/BANNER/BannerJunior.webp'

import JuniorHero from '../JUNIOR-HERO/JuniorHero'

const Junior = () => {
  return (
    <div>
      <div className="men-banner">
      <img src={JuniorBanner} loading="lazy" alt='banner'/>
      </div>

      <JuniorHero/>
    </div>
  )
}

export default Junior