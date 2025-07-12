import Banner1 from '../../assets/BANNER-IMG/Banner.jpeg'
import Banner2 from '../../assets/BANNER-IMG/Banner-2.jpeg'
import Banner3 from '../../assets/BANNER-IMG/Banner-3.jpeg'

import Phone1 from '../../assets/BANNER-IMG/phone-1.jpeg'
import Phone2 from '../../assets/BANNER-IMG/phone-2.jpeg'
import Phone3 from '../../assets/BANNER-IMG/phone-3.jpeg'

import Hero from '../HERO/Hero'
import Category from '../CATEGORY/Category'
import InfoStrip from '../INFO-STRIP/InfoStrip'
import InfoBar from '../INFO-BAR/InfoBar'

import React, { useState, useEffect } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Banner.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css'

const Banner = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);


  const slides = [
  {
    desktop: Banner1,
    mobile: Phone1
  },
  {
    desktop: Banner2,
    mobile: Phone2
  },
  {
    desktop: Banner3,
    mobile: Phone3
  }
];


    return (
           <>
  <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index} className='banner-swiper'>
        <img src={isMobile ? slide.mobile : slide.desktop} alt={`Slide ${index + 1}`} />
      </SwiperSlide>
    ))}
  </Swiper>

  <Hero />
  <Category/>
  <InfoStrip/>
  <InfoBar/>
</>


    )
}

export default Banner