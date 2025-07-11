import React from 'react'
import './InfoStrip.css'

const InfoStrip = () => {
  return (
    <div>
        <div className="strip-wrapper">

            <div className="strip-txt">
        <p>Experience the Difference: Our Results Speak for Themselves!</p>
        </div>

        <div className="rating-content">
            <div className="content">
                <h4>Awesome Polo Shirts!</h4>
                <p><i>-Shahzada Abeer-Ul-Hasnain</i></p>
                <div className="rating-star">★ ★ ★ ★</div>
            </div>
            <div className="content">
                <h4>Top quality shirts. Totally high-end products</h4>
                <p><i>-Aslam Ahmed</i></p>
                <div className="rating-star">★ ★ ★ ★</div>
            </div>
            <div className="content">
                <h4>Great staff, good quality products.</h4>
                <p><i>-Akhtar Khalid</i></p>
                <div className="rating-star">★ ★ ★ ★</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default InfoStrip