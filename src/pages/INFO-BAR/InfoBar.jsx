import React from 'react'
import './InfoBar.css'

import done from '../../assets/INFOBAR IMG/done.png'
import truck from '../../assets/INFOBAR IMG/truck.png'
import hand from '../../assets/INFOBAR IMG/hand.png'

const InfoBar = () => {
  return (
    <div>
        <div className="bar-wrapper">
            <div className="bar-txt">
                <p>Why Giordano?</p>
            </div>

            <div className="bar-content">
            <div className="content-shipping">
                <img src={done}/>
                <p>Exceptional quality from top <br />to bottom.</p>
            </div>
            <div className="content-shipping">
                <img src={truck}/>
                <p>Fast and free delivery <br />nationwide.</p>
            </div>
            <div className="content-shipping">
                <img src={hand}/>
                <p>100% customer satisfaction <br />guaranteed.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InfoBar