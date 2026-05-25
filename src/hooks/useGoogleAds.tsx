import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";
import { getConsent } from "@/lib/consent";

export default function useGoogleAds() {
  const location = useLocation();

  useEffect(() => {
    if (getConsent() !== "accepted") return;
    trackPageView(location.pathname);
  }, [location.pathname]);
}
