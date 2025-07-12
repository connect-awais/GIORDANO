import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Instantly scroll to top *before* anything shows to avoid layout jump
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 2. Optional: simulate a smooth final scroll (if needed)
    // setTimeout(() => {
    //   window.scrollTo({ top: 0, behavior: 'smooth' });
    // }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
