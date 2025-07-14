import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import TopBar from './components/TOP-BAR/TopBar';
import Header from './components/HEADER/Header';
import Account from './pages/ACCOUNT/Account';
import Banner from './pages/BANNER/Banner';
import Footer from './pages/FOOTER/Footer';
import MenBanner from './pages/MEN/MEN-BANNER/Men-Banner';
import WomenBanner from './pages/WOMEN/WOMEN-BANNER/WomenBanner';
import Junior from './pages/JUNIORS/JUNIOR-BANNER/JunniorBanner';
import ClassicClub from './pages/CLASSICCLUB/ClassicHero';
import WinterCollection from './pages/WINTER-COLLECTION/WinterHero';
import Arrival from './pages/NEW-ARRIVAL/Arrival';
import Clearence from './pages/CLEARENCE/Clearence';
import ProductDetail from './pages/PRODUCT-DETAIL/ProductDetail';
import ScrollToTop from './components/SCROLL-TO-TOP/ScrollToTop';
import CartNotification from './components/CARTNOTI/CartNotification';
import LoadingScreen from './components/LOADING/LoadingScreen'; // ✅ import new loader

function App() {
  const [isLoading, setIsLoading] = useState(true); // ✅ loading state

  useEffect(() => {
    // Show loading for 2.5s then hide
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    AOS.init({ once: true });

    const aosTimer = setTimeout(() => {
      AOS.refresh();
    }, 1000);

    window.history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer);
      clearTimeout(aosTimer);
    };
  }, []);

  const location = useLocation();
  const hideNavbarOnPaths = ['/signin'];
  const shouldShowNavbar = !hideNavbarOnPaths.includes(location.pathname.toLowerCase());

  // ✅ Show loading screen first
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <ScrollToTop />
      {shouldShowNavbar && (
        <>
          <TopBar />
          <Header />
          <CartNotification />
        </>
      )}

      <Routes>
        <Route path="/signIn" element={<Account />} />
        <Route path="/" element={<Banner />} />
        <Route path="/Men" element={<MenBanner />} />
        <Route path="/Women" element={<WomenBanner />} />
        <Route path="/Juniors" element={<Junior />} />
        <Route path="/classic-club" element={<ClassicClub />} />
        <Route path="/winter" element={<WinterCollection />} />
        <Route path="/new-arrival" element={<Arrival />} />
        <Route path="/clearence" element={<Clearence />} />
        <Route path="/product/:title" element={<ProductDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
