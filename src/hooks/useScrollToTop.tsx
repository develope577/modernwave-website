
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Custom hook that scrolls the window to the top whenever
 * the pathname in the location changes
 */
export const useScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Immediately scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);
};

export default useScrollToTop;
