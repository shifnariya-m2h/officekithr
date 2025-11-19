import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function useGoogleAds() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "AW-17365780413", {
        page_path: location.pathname,
      });
    }
  }, [location]);
}
