/** Canonical public asset paths (files live in /public). */
export const SEO_ASSETS = {
  heroBg: "/BG.webp",
  heroBg768: "/BG-768.webp",
  heroBg480: "/BG-480.webp",
  sectionBg: "/RecruitmentManagement2.jpg",
  logo: "/NavLogo.webp",
  logo137: "/NavLogo-137.webp",
  ogImage: "/ImageThumbnail2.webp",
  favicon: "/favicon.svg",
  faviconIco: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;

/** Nav logo display size (2× asset: NavLogo.webp 274×82). */
export const NAV_LOGO_WIDTH = 137;
export const NAV_LOGO_HEIGHT = 41;

export const NAV_LOGO_SRCSET = `${SEO_ASSETS.logo137} 137w, ${SEO_ASSETS.logo} 274w`;
export const NAV_LOGO_SIZES = "(max-width: 767px) 137px, 137px";

export const HERO_IMAGES = {
  mobile: {
    src: "/mobile-mockup-480.webp",
    srcSet:
      "/mobile-mockup-480.webp 480w, /mobile-mockup-768.webp 768w, /mobile-mockup.webp 750w",
    sizes: "(max-width: 768px) 240px, 480px",
    width: 480,
    height: 960,
    alt: "OfficeKit HR mobile app overview",
  },
  desktop: {
    src: "/dashboardok-1024.webp",
    srcSet: "/dashboardok-1024.webp 1024w, /dashboardok.webp 1440w",
    sizes: "(min-width: 1280px) 1024px, 90vw",
    width: 1024,
    height: 697,
    alt: "OfficeKit HR dashboard overview on desktop",
  },
  heroBg: {
    src: SEO_ASSETS.heroBg480,
    srcSet: `${SEO_ASSETS.heroBg480} 480w, ${SEO_ASSETS.heroBg768} 768w, ${SEO_ASSETS.heroBg} 1280w`,
    sizes: "(max-width: 480px) 100vw, (max-width: 768px) 100vw, 1280px",
    width: 1280,
    height: 1119,
  },
} as const;
