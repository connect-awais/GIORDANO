import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card'
import './CardSwiper.css';

const ProductSwiper = ({ title, products }) => {
  return (
    <section className="product-section" >
      <h2 className="section-title" >{title}</h2>

<Swiper
  spaceBetween={20}
  loop={false}
  speed={600}
  navigation={true}
  breakpoints={{
    0: {           // 👈 phones
      slidesPerView: 1,
    },
    480: {         // 👈 small tablets
      slidesPerView: 2,
    },
    768: {         // 👈 tablets
      slidesPerView: 3,
    },
    1024: {        // 👈 desktops
      slidesPerView: 4,
    },
  }}
  modules={[Navigation]}
>
  {products.map((product, index) => (
    <SwiperSlide key={product.id || index} className='products-swiper'>
      <Card {...product} />
    </SwiperSlide>
  ))}
</Swiper>



      <div className="view-all-wrapper">
        <button className="view-all-button">View all</button>
      </div>
    </section>
  );
};

export default ProductSwiper;
