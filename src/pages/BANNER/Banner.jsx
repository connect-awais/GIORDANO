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

import {EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';


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
  loop={true} // 🔁 Enable looping
  autoplay={{
    delay: 1800,
    disableOnInteraction: false,
  }}
  pagination={{
    clickable: true,
  }}
  navigation={true}
  effect="fade" // Optional: adds fade effect for banners
  modules={[Autoplay, Pagination, Navigation, EffectFade]}
  className="banner-swiper" // Unique class for targeting
>
  {slides.map((slide, index) => (
    <SwiperSlide key={index}>
      <img
        src={isMobile ? slide.mobile : slide.desktop}
        alt={`Slide ${index + 1}`}
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
      />
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