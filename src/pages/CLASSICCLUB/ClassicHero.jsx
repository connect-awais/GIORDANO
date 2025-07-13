import React from 'react'
import CardSwiper from '../../components/PRODUCTS/CardSwiper'
import './ClassicHero.css'

import ClassicPolo from '../../assets/CLASSIC-CLUB-IMG/ClassicPolo1.webp'
import ClassicJogger from '../../assets/CLASSIC-CLUB-IMG/ClassicJogger.webp'
import ClassicCap from '../../assets/CLASSIC-CLUB-IMG/ClassicCap.webp'

import Filter from '../../components/FILTERS/Filter'

const ClassicClub = () => {

  const classicProducts = [
    {
      id: "59",
      image: ClassicPolo,
      title: 'Classics Polo',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "60",
      image: ClassicJogger,
      title: 'Classics Jogger',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {id: "61",
      image: ClassicCap,
      title: 'Classics Cap',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  return (
    <div className="classic-layout">
      <div className="classic-sidebar">
        <Filter />
      </div>
      <div className="classic-products">
        <CardSwiper products={classicProducts} showViewAll={false}/>
      </div>
    </div>
  )
}

export default ClassicClub