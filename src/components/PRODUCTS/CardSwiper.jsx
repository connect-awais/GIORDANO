import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom'; // ← Add this
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
import './CardSwiper.css';

const ProductSwiper = ({ title, products, linkTo, showViewAll = true }) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate(linkTo); // ← Goes to dynamic route like /men or /women
  };

  return (
    <section className="product-section">
      <h2 className="section-title">{title}</h2>

      <Swiper
        className="product-swiper"
        spaceBetween={20}
        loop={false}
        speed={600}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
      >
        {products.map((product, index) => (
          <SwiperSlide key={product.id || index} className="products-swiper">
            <Card {...product} />
          </SwiperSlide>
        ))}
      </Swiper>

      {showViewAll && (
      <div className="view-all-wrapper">
        <button className="view-all-button" onClick={handleViewAll}>
          View all
        </button>
      </div>
      )}
    </section>
  );
};

export default ProductSwiper;
