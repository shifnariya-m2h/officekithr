import { Helmet } from "react-helmet-async";

/** Arabic fonts — loaded only on UAE routes to avoid global LCP cost. */
export function UaeFonts() {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&family=Tajawal:wght@400;500;700&display=swap"
      />
    </Helmet>
  );
}
