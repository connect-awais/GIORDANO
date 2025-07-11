import React from 'react'
import ClearenceBanner from '../../assets/CLEARENCE/ClearemceBanner.webp'
import './Clearence.css'

import ClearenceHero from './Hero/Clearencehero'

const Clearence = () => {
  return (
    <div>
        <div className="men-banner">
              <img src={ClearenceBanner}/>
              </div>
              <ClearenceHero/>
    </div>
  )
}

export default Clearence