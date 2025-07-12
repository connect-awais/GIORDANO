import React from 'react';
import ProductCard from '../../components/PRODUCTS/Card'; // your custom card

import Knitwear1 from '../../assets/WINTER COLLECTION/Knitwear1.webp';
import Knitwear2 from '../../assets/WINTER COLLECTION/Knitwear2.webp'
import Knitwear3 from '../../assets/WINTER COLLECTION/Knitwear3.webp'
import Knitwear4 from '../../assets/WINTER COLLECTION/Knitwear4.webp'
import Knitwear5 from '../../assets/WINTER COLLECTION/Knitwear5.webp'
import Knitwear6 from '../../assets/WINTER COLLECTION/Knitwear6.webp'
import SleevlessJacket1 from '../../assets/WINTER COLLECTION/SleevlessJacket1.webp'
import SleevlessJacket2 from '../../assets/WINTER COLLECTION/SleevlessJacket2.webp'
import SleeveJacket1 from '../../assets/WINTER COLLECTION/SleeveJacket1.webp'
import Hoodie from '../../assets/WINTER COLLECTION/Hoodie1.webp'

import './WinterHero.css'; // (you'll create this for grid layout)

import Filter from '../../components/FILTERS/Filter'

const WinterCollection = () => {
  const winterProducts = [
    {
      id: "62",
      image: Knitwear1,
      title: 'Cable Knit Crewneck Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "63",
      image: Knitwear2,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "64",
      image: SleevlessJacket1,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "65",
      image: SleeveJacket1,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "66",
      image: Knitwear4,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "67",
      image: SleevlessJacket2,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "68",
      image: Knitwear5,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "69",
      image: Knitwear6,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      id: "70",
      image: Hoodie,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    
    // you can add more products here
  ];

  return (
      <div className="layout-winter">
      <div className="sidebar-winter">
        <Filter />
      </div>
    <div className="winter-hero products">
      <div className="winter-product-grid">
        {winterProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default WinterCollection;
