import React from 'react'
import ProductCard from '../../../components/PRODUCTS/Card'
import { useState } from 'react';
import './ClearenceHero.css'

import Filter from '../../../components/FILTERS/Filter'

import BadgeCap from '../../../assets/NEW ARRIVALS/HERO/BadgeCap.webp'
import ClassicCap from '../../../assets/NEW ARRIVALS/HERO/ClassicCap.webp'
import ClassicJogger from '../../../assets/NEW ARRIVALS/HERO/ClassicJogger.webp'
import ClassicPolo1 from '../../../assets/NEW ARRIVALS/HERO/ClassicPolo1.webp'
import CouragePolo from '../../../assets/NEW ARRIVALS/HERO/CouragePolo.webp'
import CouragePoloMen from '../../../assets/NEW ARRIVALS/HERO/CouragePoloMen.webp'
import InfinitePolo from '../../../assets/NEW ARRIVALS/HERO/InfinitePolo.jpeg'
import InfinitePoloMen from '../../../assets/NEW ARRIVALS/HERO/InfinitePoloMen.webp'
import JoggerPant from '../../../assets/NEW ARRIVALS/HERO/JoggerPant.webp'
import LogoPolo from '../../../assets/NEW ARRIVALS/HERO/LogoPolo.webp'
import MensDenim from '../../../assets/NEW ARRIVALS/HERO/MensDenim.jpeg'
import OxfordShirt from '../../../assets/NEW ARRIVALS/HERO/OxfordShirtMen.webp'
import OxfordShirt2 from '../../../assets/NEW ARRIVALS/HERO/OxfordShirtMen2.webp'
import OxfordShirt3 from '../../../assets/NEW ARRIVALS/HERO/OxfordShirtMen3.webp'
import PerformanceAnkle from '../../../assets/NEW ARRIVALS/HERO/PerformanceAnkles.webp'
import PrintTee from '../../../assets/NEW ARRIVALS/HERO/PrintTee.webp'
import StripePolo from '../../../assets/NEW ARRIVALS/HERO/StripePolo.jpeg'
import StripePoloMen from '../../../assets/NEW ARRIVALS/HERO/StripePoloMen.webp'
import WrinkleShirt from '../../../assets/NEW ARRIVALS/HERO/WrinleFreeShirtMen.webp'

const ClearenceHero = () => {
    const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;


  const arrivalProducts = [
    {
      image: BadgeCap,
      title: 'Cable Knit Crewneck Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ClassicCap,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ClassicJogger,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ClassicPolo1,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: CouragePolo,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: CouragePoloMen,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: InfinitePolo,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: InfinitePoloMen,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: JoggerPant,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: LogoPolo,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: MensDenim,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirt,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirt2,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirt3,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: PerformanceAnkle,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: PrintTee,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: StripePolo,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: StripePoloMen,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: WrinkleShirt,
      title: 'Solid Crewneck Knitwear Pull Over',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    
    // you can add more products here
  ];

   const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = arrivalProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(arrivalProducts.length / productsPerPage);

  return (
<div className="clearence-layout">
      <div className="clearence-sidebar">
        <Filter />
      </div>
    <div className="clearence-hero products">
      <div className="product-grid">
        {currentProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClearenceHero;
