import React from 'react'
import './Men-Banner.css'
import MenBannerImg from '../../../assets/MEN IMG/Banner/mc1-685cd28d0b667.webp'

import MenHero from '../MEN-HERO/MenHero'


const MenBanner = () => {
  return (
    <div>
      <div className="men-banner">
      <img src={MenBannerImg}/>
      </div>

      <MenHero/>
    </div>
  )
}

export default MenBanner