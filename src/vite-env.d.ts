/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL: string;
  readonly VITE_SYNCORA_LEADS_URL: string;
  readonly VITE_SYNCORA_API_KEY: string;
  readonly VITE_BLOG_API_URL: string;
  readonly VITE_BLOG_API_KEY: string;
  readonly VITE_GA_MEASUREMENT_ID: string;
  readonly VITE_GTAG_ID: string;
  readonly VITE_GOOGLE_ADS_ID: string;
  readonly VITE_GOOGLE_ADS_CONVERSION: string;
  readonly VITE_DISABLE_ANALYTICS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
