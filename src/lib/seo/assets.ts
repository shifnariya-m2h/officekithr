/** Canonical public asset paths (files live in /public). */
export const SEO_ASSETS = {
  heroBg: "/BG.webp",
  heroBg768: "/BG-768.webp",
  sectionBg: "/RecruitmentManagement2.jpg",
  logo: "/NavLogo.webp",
  ogImage: "/ImageThumbnail2.webp",
  favicon: "/favicon.svg",
  faviconIco: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;

/** Nav logo intrinsic ratio (916×272). */
export const NAV_LOGO_WIDTH = 137;
export const NAV_LOGO_HEIGHT = 40;

export const HERO_IMAGES = {
  mobile: {
    src: "/mobile-mockup-480.webp",
    srcSet: "/mobile-mockup-480.webp 480w, /mobile-mockup.webp 750w",
    width: 480,
    height: 960,
    alt: "OfficeKit HR mobile app overview",
  },
  desktop: {
    src: "/dashboardok-1024.webp",
    srcSet: "/dashboardok-1024.webp 1024w, /dashboardok.webp 1440w",
    width: 1024,
    height: 697,
    alt: "OfficeKit HR dashboard overview on desktop",
  },
} as const;
