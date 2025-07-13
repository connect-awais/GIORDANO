import React from 'react'
import CardSwiper from '../../../components/PRODUCTS/CardSwiper'


import PoloWomen1 from '../../../assets/WOMEN-IMG/POLO/PoloWomen1.webp'
import PoloWomen2 from '../../../assets/WOMEN-IMG/POLO/PoloWomen2.webp'
import PoloWomen3 from '../../../assets/WOMEN-IMG/POLO/PoloWomen3.webp'

import BottomWomen1 from '../../../assets/WOMEN-IMG/BOTTOM/BottomWomen1.webp'
import BottomWomen2 from '../../../assets/WOMEN-IMG/BOTTOM/WomenBottom2.webp'
import BottomWomen3 from '../../../assets/WOMEN-IMG/BOTTOM/WomenBottom3.webp'

import ShirtWomen1 from '../../../assets/WOMEN-IMG/SHIRTS/ShirtWomen1.webp'

const WomenHero = () => {

  const poloProducts = [
    {
      id: "50",
          image: PoloWomen1,
          title: 'Women 3D Lion Polo',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          id: "51",
          image: PoloWomen2,
          title: 'Women Napoloen Polo',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          id: "52",
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
      id: "53",
          image: BottomWomen1,
          title: 'Women Linen Cotton Pants',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          id: "54",
          image: BottomWomen2,
          title: 'Women Stretch Denim Jeans',
          price: 8999,
          colors: ['#000', '#ddd'],
          sizes: ['Small', 'Medium', 'Large'],
          isNew: true,
        },
        {
          id: "55",
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
      id: "56",
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
      <CardSwiper title="POLO" products={poloProducts} showViewAll={false}/>
      <CardSwiper title="BOTTOMS" products={bottomProducts} showViewAll={false}/>
      <CardSwiper title="SHIRTS" products={shirtsProducts} showViewAll={false}/>
    </div>
  )
}

export default WomenHero