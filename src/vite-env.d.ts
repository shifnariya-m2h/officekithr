/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_LEADS_API_URL: string;
  readonly VITE_HR_POPUP_API_URL: string;
  readonly VITE_BLOG_API_URL: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_GTAG_ID: string;
  readonly VITE_GOOGLE_ADS_ID: string;
  readonly VITE_GOOGLE_ADS_CONVERSION: string;
  readonly VITE_TAWK_PROPERTY_ID: string;
  readonly VITE_TAWK_WIDGET_ID: string;
  readonly VITE_DISABLE_TAWK: string;
  readonly VITE_DISABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
