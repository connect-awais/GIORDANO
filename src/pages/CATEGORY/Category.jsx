import React from 'react'
import './Category.css'

import POLO from '../../assets/CATEGORY IMG/POLO.webp'
import SHIRTS from '../../assets/CATEGORY IMG/SHIRTS.webp'
import TEES from '../../assets/CATEGORY IMG/TEES.webp'
import GMOTION from '../../assets/CATEGORY IMG/G-MOTION.webp'
import BOTTOMS from '../../assets/CATEGORY IMG/BOTTOMS.webp'
import WOMEN from '../../assets/CATEGORY IMG/WOMEN.webp'
import JUNIORS from '../../assets/CATEGORY IMG/JUNIORS.webp'
import ESSENTIALS from '../../assets/CATEGORY IMG/ESSENTIALS.webp'
import CAPS from '../../assets/CATEGORY IMG/CAPS.webp'
import CLEARENCE from '../../assets/CATEGORY IMG/CLEARENCE.webp'

const Category = () => {
  return (
    <div>
      <div className="category-wrapper">

        <div className="category-txt">
        <p>SHOP OUR CATEGORIES</p>
        </div>

        <div className="section">
          <div className="col-1">
            <div className="img-txt">
          <img src={POLO}/>
          <p>Polo</p>
          </div>
          <div className="img-txt">
          <img src={SHIRTS}/>
          <p>Shirts</p>
          </div>
          <div className="img-txt">
          <img src={TEES}/>
          <p>Tees</p>
          </div>
          <div className="img-txt">
          <img src={GMOTION}/>
          <p>G-Motion</p>
          </div>
          <div className="img-txt">
          <img src={BOTTOMS}/>
          <p>Bottoms</p>
          </div>
          </div>
          <div className="col-1">
            <div className="img-txt">
          <img src={WOMEN}/>
          <p>Women</p>
          </div>
          <div className="img-txt">
          <img src={JUNIORS}/>
          <p>Juniors</p>
          </div>
          <div className="img-txt">
          <img src={ESSENTIALS}/>
          <p>Essentials</p>
          </div>
          <div className="img-txt">
          <img src={CAPS}/>
          <p>Caps</p>
          </div>
          <div className="img-txt">
          <img src={CLEARENCE}/>
          <p>Clearence</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Category