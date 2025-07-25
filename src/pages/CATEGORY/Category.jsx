import React from 'react'
import './Category.css'
import { Link } from 'react-router-dom'

import POLO from '../../assets/CATEGORY-IMG/POLO.webp'
import SHIRTS from '../../assets/CATEGORY-IMG/SHIRTS.webp'
import TEES from '../../assets/CATEGORY-IMG/TEES.webp'
import GMOTION from '../../assets/CATEGORY-IMG/G-MOTION.webp'
import BOTTOMS from '../../assets/CATEGORY-IMG/BOTTOMS.webp'
import WOMEN from '../../assets/CATEGORY-IMG/WOMEN.webp'
import JUNIORS from '../../assets/CATEGORY-IMG/JUNIORS.webp'
import ESSENTIALS from '../../assets/CATEGORY-IMG/ESSENTIALS.webp'
import CAPS from '../../assets/CATEGORY-IMG/CAPS.webp'
import CLEARENCE from '../../assets/CATEGORY-IMG/CLEARENCE.webp'

const Category = () => {
  return (
    <div>
      <div className="category-wrapper">

        <div className="category-txt">
          <p>SHOP OUR CATEGORIES</p>
        </div>

        <div className="section">
          <div className="col-1">
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={POLO} loading="lazy" alt='img'/>
                <p>Polo</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={SHIRTS} loading="lazy" alt='img'/>
                <p>Shirts</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={TEES} loading="lazy" alt='img'/>
                <p>Tees</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={GMOTION} loading="lazy" alt='img'/>
                <p>G-Motion</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={BOTTOMS} loading="lazy" alt='img'/>
                <p>Bottoms</p>
              </div>
            </Link>
          </div>
          <div className="col-1">
            <Link to="/Women" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={WOMEN} loading="lazy" alt='img'/>
                <p>Women</p>
              </div>
            </Link>
            <Link to="/Juniors" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={JUNIORS} loading="lazy" alt='img'/>
                <p>Juniors</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={ESSENTIALS} loading="lazy" alt='img'/>
                <p>Essentials</p>
              </div>
            </Link>
            <Link to="/Men" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={CAPS} loading="lazy" alt='img'/>
                <p>Caps</p>
              </div>
            </Link>
            <Link to="/clearence" style={{ textDecoration: 'none', color: 'black' }}>
              <div className="img-txt">
                <img src={CLEARENCE} loading="lazy" alt='img'/>
                <p>Clearence</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category