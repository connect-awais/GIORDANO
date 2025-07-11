import React from 'react'
import CardSwiper from '../../../components/PRODUCTS/CardSwiper'


import PoloWomen1 from '../../../assets/WOMEN IMG/POLO/PoloWomen1.webp'
import PoloWomen2 from '../../../assets/WOMEN IMG/POLO/PoloWomen2.webp'
import PoloWomen3 from '../../../assets/WOMEN IMG/POLO/PoloWomen3.webp'

import BottomWomen1 from '../../../assets/WOMEN IMG/BOTTOM/BottomWomen1.webp'
import BottomWomen2 from '../../../assets/WOMEN IMG/BOTTOM/WomenBottom2.webp'
import BottomWomen3 from '../../../assets/WOMEN IMG/BOTTOM/WomenBottom3.webp'

import ShirtWomen1 from '../../../assets/WOMEN IMG/SHIRTS/ShirtWomen1.webp'

const WomenHero = () => {

  const poloProducts = [
    {
          image: PoloWomen1,
          title: 'Women 3D Lion Polo',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          image: PoloWomen2,
          title: 'Women Napoloen Polo',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          image: PoloWomen3,
          title: 'Women AntiMicrobial Polo',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
  ]

  const bottomProducts = [
    {
          image: BottomWomen1,
          title: 'Women Linen Cotton Pants',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          image: BottomWomen2,
          title: 'Women Stretch Denim Jeans',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          image: BottomWomen3,
          title: 'Women Repreve Denim Jeans',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
  ]

  const  shirtsProducts = [
    {
          image: ShirtWomen1,
          title: 'Women Performance Oxford Shirt',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
  ]
  return (
    <div>
      <CardSwiper title="POLO" products={poloProducts} />
      <CardSwiper title="BOTTOMS" products={bottomProducts} />
      <CardSwiper title="SHIRTS" products={shirtsProducts} />
    </div>
  )
}

export default WomenHero