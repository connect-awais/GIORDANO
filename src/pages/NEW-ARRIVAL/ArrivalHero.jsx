import React, { useState, useRef, useEffect } from 'react';
import ProductCard from '../../components/PRODUCTS/Card';
import Filter from '../../components/FILTERS/Filter';
import './ArrivalHero.css';

// Product Images
import BadgeCap from '../../assets/NEW ARRIVALS/HERO/BadgeCap.webp';
import ClassicCap from '../../assets/NEW ARRIVALS/HERO/ClassicCap.webp';
import ClassicJogger from '../../assets/NEW ARRIVALS/HERO/ClassicJogger.webp';
import ClassicPolo1 from '../../assets/NEW ARRIVALS/HERO/ClassicPolo1.webp';
import CouragePolo from '../../assets/NEW ARRIVALS/HERO/CouragePolo.webp';
import CouragePoloMen from '../../assets/NEW ARRIVALS/HERO/CouragePoloMen.webp';
import InfinitePolo from '../../assets/NEW ARRIVALS/HERO/InfinitePolo.jpeg';
import InfinitePoloMen from '../../assets/NEW ARRIVALS/HERO/InfinitePoloMen.webp';
import JoggerPant from '../../assets/NEW ARRIVALS/HERO/JoggerPant.webp';
import LogoPolo from '../../assets/NEW ARRIVALS/HERO/LogoPolo.webp';
import MensDenim from '../../assets/NEW ARRIVALS/HERO/MensDenim.jpeg';
import OxfordShirt from '../../assets/NEW ARRIVALS/HERO/OxfordShirtMen.webp';
import OxfordShirt2 from '../../assets/NEW ARRIVALS/HERO/OxfordShirtMen2.webp';
import OxfordShirt3 from '../../assets/NEW ARRIVALS/HERO/OxfordShirtMen3.webp';
import PerformanceAnkle from '../../assets/NEW ARRIVALS/HERO/PerformanceAnkles.webp';
import PrintTee from '../../assets/NEW ARRIVALS/HERO/PrintTee.webp';
import StripePolo from '../../assets/NEW ARRIVALS/HERO/StripePolo.jpeg';
import StripePoloMen from '../../assets/NEW ARRIVALS/HERO/StripePoloMen.webp';
import WrinkleShirt from '../../assets/NEW ARRIVALS/HERO/WrinleFreeShirtMen.webp';

const ArrivalHero = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;
  const productGridRef = useRef(null); // Reference to scroll to

  const allImages = [
    BadgeCap, ClassicCap, ClassicJogger,CouragePolo,
    CouragePoloMen, InfinitePolo, InfinitePoloMen, JoggerPant,
    LogoPolo, MensDenim, OxfordShirt, OxfordShirt2, OxfordShirt3,
    PerformanceAnkle, PrintTee, StripePolo, StripePoloMen, WrinkleShirt,
  ];

  const arrivalProducts = allImages.map((image, index) => ({
  id: index + 71, // ✅ gives id: 1, 2, 3, ...
  image,
  title: 'Solid Crewneck Knitwear Pull Over',
  price: 8999,
  colors: ['#000', '#ddd'],
  sizes: ['Small', 'Medium', 'Large'],
  isNew: true,
}));


  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = arrivalProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(arrivalProducts.length / productsPerPage);

  // Scroll to top of products when currentPage changes
  useEffect(() => {
    if (productGridRef.current) {
      productGridRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [currentPage]);

  return (
    <div className="arrival-layout">
      <div className="arrival-sidebar">
        <Filter />
      </div>

      <div className="arrival-hero" ref={productGridRef}>
        <div className="arrival-product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.image} {...product} />
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination-buttons">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? 'active' : ''}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArrivalHero;
