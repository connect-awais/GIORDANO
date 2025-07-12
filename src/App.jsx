import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import TopBar from './components/TOP-BAR/TopBar'
import Header from './components/HEADER/Header'
import Account from './pages/ACCOUNT/Account'
import Banner from './pages/BANNER/Banner'
import Footer from './pages/FOOTER/Footer'
import { Routes, Route, useLocation } from 'react-router-dom'
import MenBanner from './pages/MEN/MEN-BANNER/Men-Banner'
import WomenBanner from './pages/WOMEN/WOMEN-BANNER/WomenBanner'
import Junior from './pages/JUNIORS/JUNIOR-BANNER/JunniorBanner';
import ClassicClub from './pages/CLASSICCLUB/ClassicHero'
import WinterCollection from './pages/WINTER-COLLECTION/WinterHero'
import Arrival from './pages/NEW-ARRIVAL/Arrival';
import Clearence from './pages/CLEARENCE/Clearence';
import ProductDetail from './pages/PRODUCT-DETAIL/ProductDetail';
import ScrollToTop from './components/SCROLL-TO-TOP/ScrollToTop';
import CartNotification from './components/CARTNOTI/CartNotification'

function App() {

  

useEffect(() => {
  // Initialize AOS once
  AOS.init({ once: true });

  // Refresh AOS after Swiper loads
  const timeout = setTimeout(() => {
    AOS.refresh(); // Recalculate animation layout after Swiper is ready
  }, 1000); // Adjust timing if needed

  // Force scroll to top on initial page load
  window.history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  // Cleanup the timeout on unmount
  return () => clearTimeout(timeout);
}, []);




   const location = useLocation();

  // hide top-bar + header on login page
  const hideNavbarOnPaths = ['/signin']; // use lowercase path
  const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname.toLowerCase());

  return (
    <>
    <ScrollToTop/>
   {shouldShowNavbar && (
  <>
    <TopBar />
    <Header />
    <CartNotification/>
  </>
)}

    <Routes>
      <Route path="/signIn" element={<Account/>}></Route>
      <Route path="/" element={<Banner/>}></Route>
      <Route path="/Men" element={<MenBanner/>}></Route>
      <Route path="/Women" element={<WomenBanner/>}></Route>
      <Route path="/Juniors" element={<Junior/>}></Route>
      <Route path="/classic-club" element={<ClassicClub/>}></Route>
      <Route path="/winter" element={<WinterCollection/>}></Route>
      <Route path="/new-arrival" element={<Arrival/>}></Route>
      <Route path="/clearence" element={<Clearence/>}></Route>
      <Route path="/product/:title" element={<ProductDetail />} />
    </Routes>

    <Footer/>
    </>
  );
}

export default App;
