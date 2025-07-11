// MainComponent.jsx
import CardSwiper from '../../components/PRODUCTS/CardSwiper'

// Men
import InfinitePolo from '../../assets/HERO IMG/InfinitePolo.jpeg'
import MensDenim from '../../assets/HERO IMG/MensDenim.jpeg'
import StripePolo from '../../assets/HERO IMG/StripePolo.jpeg'
import CouragePolo from '../../assets/HERO IMG/CouragePolo.webp'
import Ankle from '../../assets/HERO IMG/PerformanceAnkles.webp'
import PrintTee from '../../assets/HERO IMG/PrintTee.webp'
import BadgeCap from '../../assets/HERO IMG/BadgeCap.webp'
import JoggerPant from '../../assets/HERO IMG/JoggerPant.webp'
import LogoPolo from '../../assets/HERO IMG/LogoPolo.webp'

//Women
import NapoloenPolo from '../../assets/HERO IMG/Women/NapoloenPolo.webp'
import CottonPant from '../../assets/HERO IMG/Women/CottonPants.webp'
import OxfordShirt from '../../assets/HERO IMG/Women/OxfordShirt.webp'
import DenimJeans from '../../assets/HERO IMG/Women/DenimJeans.webp'
import LionPolo from '../../assets/HERO IMG/Women/LionPolo.webp'
import StretchJeans from '../../assets/HERO IMG/Women/StretchJeans.webp' 

//Junior
import Shorts from '../../assets/HERO IMG/Juniors/Shorts.webp'
import ExplorationPolo from '../../assets/HERO IMG/Juniors/ExplorationPolo.webp'

import "swiper/css";
import "swiper/css/navigation";

const MainComponent = () => {

  const menProducts = [
    {
      id: "1",
      title: "Infinite Polo",
      price: 11999.00,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#4c4c6d", "#dfe4ea"],
      image: InfinitePolo,
    },
    {
      title: "Men's Denim Jeans",
      price: 14999,
      sizes: [30, 32, 34, 36, 38],
      colors: ["#2c3e50", "#34495e", "#95a5a6"],
      image: MensDenim,
    },
    {
      title: "Giordano Stripe Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: StripePolo,
    },
    {
      title: "Courage Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: CouragePolo,
    },
    {
      title: "Performance Ankle Socks",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: Ankle,
    },
    {
      title: "Giordano Print Tee",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: PrintTee,
    },
    {
      title: "Round Rubber Badge Cap",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: BadgeCap,
    },
    {
      title: "Air Double Knit Jogger Pants",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: JoggerPant,
    },
    {
      title: "Napoloen Logo Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: LogoPolo,
    },
  ]
  const womenProducts = [
    {
      id: "1",
      title: "Women AntiMicrobial Small Napoleon Polo",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: NapoloenPolo,
    },
    {
      title: "Women Linen Cotton Pants",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: CottonPant,
    },
    {
      title: "Women Performance Oxford Shirt",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: OxfordShirt,
    },
    {
      title: "Women Repreve Denim Jeans",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: DenimJeans,
    },
    {
      title: "Women 3D Lion Polo",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: LionPolo,
    },
    {
      title: "Women stretch Denim Jeans",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: StretchJeans,
    },
  ]
  const juniorProducts = [
    {
      title: "Junior Supremacy Short",
      price: 6999,
      sizes: ["100", "110", "130", "140", "155"],
      colors: ["#00008B", "#000000", "#5c1000"],
      image: Shorts,
    },
    {
      title: "Junior EXploration Polo",
      price: 8499,
      sizes: ["100", "110", "130", "140", "155", "165"],
      colors: ["#00008B", "#000000", "#5c1000", "#dfaf86"],
      image: ExplorationPolo,
    },
  ]

  return (
    <div>
      <CardSwiper products={menProducts} />
      <CardSwiper products={womenProducts} />
      <CardSwiper products={juniorProducts} />
    </div>
  );
};

export default MainComponent;
