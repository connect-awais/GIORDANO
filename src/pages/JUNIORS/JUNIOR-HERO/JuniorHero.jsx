import React from 'react'

import ProductCard from '../../../components/PRODUCTS/Card'

import JuniorPolo1 from '../../../assets/JUNIOR IMG/JUNIOR/JuniorPolo1.webp'
import JuniorShorts1 from '../../../assets/JUNIOR IMG/JUNIOR/JunniorShorts1.webp'
import './JuniorHero.css'

import Filter from '../../../components/FILTERS/Filter'

const JuniorHero = () => {

  const juniorProducts = [
    {
      id: "57",
      image: JuniorPolo1,
      title: 'Junior Exploration Polo',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['110', '120', '140'],
      isNew: true,
    },
    {
      id: "58",
      image: JuniorShorts1,
      title: 'Junior Supremacy Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['100', '120', '125'],
      isNew: true,
    },
  ]

  return (
    <div className="junior-layout">
  <div className="junior-sidebar">
    <Filter />
  </div>
  <div className="junior-product-grid">
    {juniorProducts.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
</div>


  )
}

export default JuniorHero