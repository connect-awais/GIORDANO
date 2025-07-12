// MainComponent.jsx
import CardSwiper from '../../components/PRODUCTS/CardSwiper'

// Men
import InfinitePolo from '../../assets/HERO-IMG/InfinitePolo.jpeg'
import MensDenim from '../../assets/HERO-IMG/MensDenim.jpeg'
import StripePolo from '../../assets/HERO-IMG/StripePolo.jpeg'
import CouragePolo from '../../assets/HERO-IMG/CouragePolo.webp'
import Ankle from '../../assets/HERO-IMG/PerformanceAnkles.webp'
import PrintTee from '../../assets/HERO-IMG/PrintTee.webp'
import BadgeCap from '../../assets/HERO-IMG/BadgeCap.webp'
import JoggerPant from '../../assets/HERO-IMG/JoggerPant.webp'
import LogoPolo from '../../assets/HERO-IMG/LogoPolo.webp'

//Women
import NapoloenPolo from '../../assets/HERO-IMG/Women/NapoloenPolo.webp'
import CottonPant from '../../assets/HERO-IMG/Women/CottonPants.webp'
import OxfordShirt from '../../assets/HERO-IMG/Women/OxfordShirt.webp'
import DenimJeans from '../../assets/HERO-IMG/Women/DenimJeans.webp'
import LionPolo from '../../assets/HERO-IMG/Women/LionPolo.webp'
import StretchJeans from '../../assets/HERO-IMG/Women/StretchJeans.webp' 

//Junior
import Shorts from '../../assets/HERO-IMG/Juniors/Shorts.webp'
import ExplorationPolo from '../../assets/HERO-IMG/Juniors/ExplorationPolo.webp'

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
      id: "2",
      title: "Men's Denim Jeans",
      price: 14999,
      sizes: [30, 32, 34, 36, 38],
      colors: ["#2c3e50", "#34495e", "#95a5a6"],
      image: MensDenim,
    },
    {
      id: "3",
      title: "Giordano Stripe Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: StripePolo,
    },
    {
      id: "4",
      title: "Courage Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: CouragePolo,
    },
    {
      id: "5",
      title: "Performance Ankle Socks",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: Ankle,
    },
    {
      id: "6",
      title: "Giordano Print Tee",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: PrintTee,
    },
    {
      id: "7",
      title: "Round Rubber Badge Cap",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: BadgeCap,
    },
    {
      id: "8",
      title: "Air Double Knit Jogger Pants",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: JoggerPant,
    },
    {
      id: "9",
      title: "Napoloen Logo Polo",
      price: 12499,
      sizes: ["Small", "Medium", "Large", "XL", "XXL"],
      colors: ["#2c2c54", "#dcdde1", "#c23616"],
      image: LogoPolo,
    },
  ]
  const womenProducts = [
    {
      id: "10",
      title: "Women AntiMicrobial Small Napoleon Polo",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: NapoloenPolo,
    },
    {
      id: "11",
      title: "Women Linen Cotton Pants",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: CottonPant,
    },
    {
      id: "12",
      title: "Women Performance Oxford Shirt",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: OxfordShirt,
    },
    {
      id: "13",
      title: "Women Repreve Denim Jeans",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: DenimJeans,
    },
    {
      id: "14",
      title: "Women 3D Lion Polo",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: LionPolo,
    },
    {
      id: "15",
      title: "Women stretch Denim Jeans",
      price: 10999,
      sizes: ["Small", "Medium", "Large", "XL"],
      colors: ["#f8c291", "#f5cd79"],
      image: StretchJeans,
    },
  ]
  const juniorProducts = [
    {
      id: "16",
      title: "Junior Supremacy Short",
      price: 6999,
      sizes: ["100", "110", "130", "140", "155"],
      colors: ["#00008B", "#000000", "#5c1000"],
      image: Shorts,
    },
    {
      id: "17",
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
