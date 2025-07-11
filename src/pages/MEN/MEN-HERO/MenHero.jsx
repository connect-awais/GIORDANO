import React from 'react';
import CardSwiper from '../../../components/PRODUCTS/CardSwiper'

import CouragePoloMen from '../../../assets/MEN IMG/SWIPER IMG/CouragePoloMen.webp'
import StripePoloMen from '../../../assets/MEN IMG/SWIPER IMG/StripePoloMen.webp'
import InfinitePoloMen from '../../../assets/MEN IMG/SWIPER IMG/InfinitePoloMen.webp'
import NapoloenPoloMen from '../../../assets/MEN IMG/SWIPER IMG/LogoPoloMen.webp'
import PrintTeeMen from '../../../assets/MEN IMG/SWIPER IMG/PrintTee.webp'

import OxfordShirtMen from '../../../assets/MEN IMG/SWIPER IMG/SHIRT/OxfordShirtMen.webp'
import OxfordShirtMen2 from '../../../assets/MEN IMG/SWIPER IMG/SHIRT/OxfordShirtMen2.webp'
import OxfordShirtMen3 from '../../../assets/MEN IMG/SWIPER IMG/SHIRT/OxfordShirtMen3.webp'
import WinklerShirtMen from '../../../assets/MEN IMG/SWIPER IMG/SHIRT/WrinleFreeShirtMen.webp'

import NeckTeeMen from '../../../assets/MEN IMG/SWIPER IMG/TEES/NeckTeeMen.webp'
import HenlyTeeMen from '../../../assets/MEN IMG/SWIPER IMG/TEES/HenlyTeeMen.webp'
import LongSleeveTeeMen from '../../../assets/MEN IMG/SWIPER IMG/TEES/LongSleeveTeeMen.webp'

import InnoKhakiSkinnymen from '../../../assets/MEN IMG/SWIPER IMG/INNO-KHAKI/InnoKhakiSkinnyMen.webp'
import InnoKhakiBluemen from '../../../assets/MEN IMG/SWIPER IMG/INNO-KHAKI/InnoKhakiBlueMen.webp'

import JoggerMen1 from '../../../assets/MEN IMG/SWIPER IMG/JOGGERS/joggerMen1.webp'
import JoggerMen2 from '../../../assets/MEN IMG/SWIPER IMG/JOGGERS/joggerMen2.webp'
import JoggerMen3 from '../../../assets/MEN IMG/SWIPER IMG/JOGGERS/joggerMen3.webp'
import JoggerMen4 from '../../../assets/MEN IMG/SWIPER IMG/JOGGERS/joggerMen4.webp'

import ShortMen1 from '../../../assets/MEN IMG/SWIPER IMG/SHORTS/ShortMen1.webp'
import ShortMen2 from '../../../assets/MEN IMG/SWIPER IMG/SHORTS/ShortMen2.webp'
import ShortMen3 from '../../../assets/MEN IMG/SWIPER IMG/SHORTS/ShortMen3.webp'
import ShortMen4 from '../../../assets/MEN IMG/SWIPER IMG/SHORTS/ShortMen4.webp'

import CapMen1 from '../../../assets/MEN IMG/SWIPER IMG/ESSENTIALS/CapMen1.webp'
import CapMen2 from '../../../assets/MEN IMG/SWIPER IMG/ESSENTIALS/CapMen2.webp'
import AnkleMen1 from '../../../assets/MEN IMG/SWIPER IMG/ESSENTIALS/AnkleMen1.webp'
import ModalMen1 from '../../../assets/MEN IMG/SWIPER IMG/ESSENTIALS/ModalMen1.webp'

const Men = () => {

  const poloProducts = [
    {
      image: CouragePoloMen,
      title: 'Courage Polo',
      price: 11999,
      colors: ['#ffffff', '#000000'],
      sizes: ['Small', 'Medium', 'Large', 'XL'],
      isNew: true,
    },
    {
      image: StripePoloMen,
      title: 'Giordano Stripe Polo',
      price: 12499,
      colors: ['#ffffff', '#000000', '#222222'],
      sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
      isNew: true,
    },
    {
      image: InfinitePoloMen,
      title: 'Giordano Infinite Polo',
      price: 12499,
      colors: ['#ffffff', '#000000', '#222222'],
      sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
      isNew: true,
    },
    {
      image: NapoloenPoloMen,
      title: 'Giordano Napoloen Polo',
      price: 12499,
      colors: ['#ffffff', '#000000', '#222222'],
      sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
      isNew: true,
    },
    {
      image: PrintTeeMen,
      title: 'Giordano PrintTee Polo',
      price: 12499,
      colors: ['#ffffff', '#000000', '#222222'],
      sizes: ['Small', 'Medium', 'Large', 'XL', 'XXL'],
      isNew: true,
    },
    // Add more
  ];

  const shirtProducts = [
    {
      image: OxfordShirtMen,
      title: 'Performance Oxford Shirt',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirtMen2,
      title: 'Performance Oxford Shirt',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirtMen3,
      title: 'Performance Oxford Shirt',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: WinklerShirtMen,
      title: 'Wrinkle Free Shirt',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: OxfordShirtMen3,
      title: 'Performance Oxford Shirt',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    // Add more
  ];

  const teesProducts = [
    {
      image: NeckTeeMen,
      title: 'Cotton Jersey Crew Neck Slim Fit Tee',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: PrintTeeMen,
      title: 'Giordano Print Tee',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: HenlyTeeMen,
      title: 'Henley Performance Tee',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: LongSleeveTeeMen,
      title: 'Crewneck Long Sleeve Interlock Tees',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  const innokhakiProducts= [
    {
      image: InnoKhakiSkinnymen,
      title: 'Crewneck Long Sleeve Interlock Tees',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: InnoKhakiBluemen,
      title: 'Crewneck Long Sleeve Interlock Tees',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  const joggersProducts = [
    {
      image: JoggerMen1,
      title: 'Cool Touch Interlock Jogger',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: JoggerMen2,
      title: 'G-Motion Plain Weave Jogger',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: JoggerMen3,
      title: 'Twill Jogger Khaki',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: JoggerMen4,
      title: 'G-Motion Elastic Waist Jogger Pant',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: JoggerMen3,
      title: 'Twill Jogger Khaki',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  const shortsProducts = [
    {
      image: ShortMen1,
      title: 'Embroidered Logo Supremacy Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ShortMen2,
      title: 'Cotton Slim Hidden Comfort Bermuda Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ShortMen3,
      title: 'Solid Drawstring Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ShortMen4,
      title: 'Supremacy Serona Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ShortMen3,
      title: 'Solid Drawstring Short',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  const essentialsProducts = [
    {
      image: CapMen1,
      title: 'Giordano Courage Cap',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: AnkleMen1,
      title: 'Performance Ankle Socks',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: CapMen2,
      title: 'Round Rubber Badge Cap',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: ModalMen1,
      title: 'High Modal Trunks (Pack of 3)',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
    {
      image: AnkleMen1,
      title: 'Performance Ankle Socks',
      price: 8999,
      colors: ['#000', '#ddd'],
      sizes: ['Small', 'Medium', 'Large'],
      isNew: true,
    },
  ]

  return (
    <div>
      <CardSwiper title="POLO" products={poloProducts} />
      <CardSwiper title="SHIRTS" products={shirtProducts} />
      <CardSwiper title="TEES" products={teesProducts} />
      <CardSwiper title="INNO-KHAKIS" products={innokhakiProducts} />
      <CardSwiper title="JOGGERS" products={joggersProducts} />
      <CardSwiper title="SHORTS" products={shortsProducts} />
      <CardSwiper title="ESSENTIALS" products={essentialsProducts} />
      {/* More sections */}
    </div>
  );
};

export default Men;
