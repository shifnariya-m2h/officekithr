"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  ArrowRight, ChevronDown, Menu, X,
  BookOpen,
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useLanguage } from "@/contexts/LanguageContext";
import { NavBrandLogo } from "@/components/ui/NavBrandLogo";
import { AnnouncementBar, useAnnouncementNavOffset } from "@/components/AnnouncementBar";
import { SITE_ANNOUNCEMENT } from "@/data/site-announcement";
import { useIsDesktopNav } from "@/hooks/useMediaQuery";
import { useMobileNavLock } from "@/hooks/useMobileNavLock";
import { FEATURE_NAV_LINKS } from "@/data/feature-nav";

const Navigation = () => {
  const { language, setLanguage, t, isRTL } = useLanguage();
  const isDesktopNav = useIsDesktopNav();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const featuresTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { announcementVisible, dismissAnnouncement } = useAnnouncementNavOffset();

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, []);

  useMobileNavLock(isMobileMenuOpen, closeMenu);

  const featuresLinks = FEATURE_NAV_LINKS.map((link) => ({
    id: link.id,
    name: language === "ar" ? link.nameAr : link.name,
    href: link.href,
    icon: link.icon,
    description: language === "ar" ? link.descriptionAr : link.description,
  }));

  const resourcesLinks = [
    {
      name: language === "ar" ? "المدونات" : "Blogs",
      nameEn: "Blogs",
      nameAr: "المدونات",
      href: "/resources/blogs",
      icon: BookOpen,
      description:
        language === "ar" ? "أحدث الرؤى والتحديثات." : "Latest insights and updates.",
    },
    {
      name: language === "ar" ? "برنامج الموارد البشرية الإمارات" : "HR Software UAE",
      nameEn: "HR Software UAE",
      nameAr: "برنامج الموارد البشرية الإمارات",
      href: "/hr-software-uae",
      icon: Globe,
      description:
        language === "ar" ? "كشوف رواتب WPS والامتثال." : "WPS payroll & GCC HR.",
    },
    {
      name: language === "ar" ? "نظام HRMS الهند" : "HRMS India",
      nameEn: "HRMS India",
      nameAr: "نظام HRMS الهند",
      href: "/hrms-software-india",
      icon: Coins,
      description:
        language === "ar" ? "رواتب قانونية في الهند." : "Statutory payroll & HRMS.",
    },
    {
      name: language === "ar" ? "حلول إقليمية" : "All regions",
      nameEn: "All regions",
      nameAr: "حلول إقليمية",
      href: "/solutions",
      icon: BookOpen,
      description:
        language === "ar" ? "الهند والإمارات ودول الخليج." : "India, UAE & GCC guides.",
    },
  ];

  // WhatsApp Handler - UAE number
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/971528155771?text=" + encodeURIComponent(language === 'ar' ? 'مرحباً OfficeKit HR' : 'Hi OfficeKit HR'),
      "_blank"
    );
  };

  // Handle Language Change
  const handleLanguageChange = (lang: 'en' | 'ar') => {
    setLanguage(lang);
  };

  // Hover handlers for Features dropdown
  const handleFeaturesMouseEnter = () => {
    if (featuresTimeoutRef.current) {
      clearTimeout(featuresTimeoutRef.current);
    }
    featuresTimeoutRef.current = setTimeout(() => {
      setFeaturesOpen(true);
    }, 200); // 200ms delay
  };

  const handleFeaturesMouseLeave = () => {
    if (featuresTimeoutRef.current) {
      clearTimeout(featuresTimeoutRef.current);
    }
    featuresTimeoutRef.current = setTimeout(() => {
      setFeaturesOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Hover handlers for Resources dropdown
  const handleResourcesMouseEnter = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(true);
    }, 200); // 200ms delay
  };

  const handleResourcesMouseLeave = () => {
    if (resourcesTimeoutRef.current) {
      clearTimeout(resourcesTimeoutRef.current);
    }
    resourcesTimeoutRef.current = setTimeout(() => {
      setResourcesOpen(false);
    }, 150); // 150ms delay before closing
  };

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (featuresTimeoutRef.current) {
        clearTimeout(featuresTimeoutRef.current);
      }
      if (resourcesTimeoutRef.current) {
        clearTimeout(resourcesTimeoutRef.current);
      }
    };
  }, []);

  // Custom Logo Component
  const NavbarLogo = () => (
    <Link
      to="/"
      className={`relative z-20 ${isRTL ? "ml-2 sm:ml-4" : "mr-2 sm:mr-4"} flex items-center space-x-2 px-2 py-1 transition-all duration-300 group/nav flex-shrink-0`}
    >
      <NavBrandLogo />
    </Link>
  );

  return (
    <>
      <AnnouncementBar visible={announcementVisible} onDismiss={dismissAnnouncement} />
      <Navbar
        className={cn(
          "!fixed left-0 w-full right-0 z-50 pt-2 sm:pt-4 md:pt-6 lg:pt-8",
          announcementVisible ? SITE_ANNOUNCEMENT.navOffsetClass : "!top-0",
          isRTL ? "font-arabic" : ""
        )}
      >
      {isDesktopNav ? (
      <NavBody>
        <NavbarLogo />
        
        {/* Desktop Navigation Items with Dropdowns */}
        <div className={`absolute inset-0 hidden flex-1 flex-row items-center justify-center ${isRTL ? 'space-x-reverse' : ''} space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-4 lg:flex pointer-events-none`}>
          {/* Language Switcher */}
          <DropdownMenu>
            <div className="pointer-events-auto">
              <DropdownMenuTrigger asChild>
                <button 
                  className={`nav-menu-trigger flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-1'} px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-800`}
                  onBlur={(e) => e.currentTarget.blur()}
                  aria-label="Language menu"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'ar' ? 'العربية' : 'English'}</span>
                  <ChevronDown className="h-4 w-4 transition-transform duration-200" aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-40 bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-2 z-[70]"
                align="start"
                sideOffset={8}
                onCloseAutoFocus={(e) => e.preventDefault()}
                side="bottom"
              >
                <button
                  onClick={() => handleLanguageChange('en')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'en' ? 'bg-blue-50 text-[#0055ff] font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-[#0055ff]'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => handleLanguageChange('ar')}
                  className={`w-full text-left px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    language === 'ar' ? 'bg-blue-50 text-[#0055ff] font-semibold' : 'text-gray-700 hover:bg-blue-50 hover:text-[#0055ff]'
                  }`}
                >
                  العربية
                </button>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          {/* Features Dropdown */}
          <DropdownMenu 
            modal={false} 
            open={featuresOpen} 
            onOpenChange={setFeaturesOpen}
          >
            <div
              onMouseEnter={handleFeaturesMouseEnter}
              onMouseLeave={handleFeaturesMouseLeave}
              className="pointer-events-auto"
            >
              <DropdownMenuTrigger asChild>
                <button 
                  className={`nav-menu-trigger flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-1'} px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-800`}
                  onBlur={(e) => e.currentTarget.blur()}
                  aria-label={language === 'ar' ? 'قائمة الميزات' : 'Features menu'}
                  aria-expanded={featuresOpen}
                  aria-haspopup="true"
                >
                  <span>{t('nav.features')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${featuresOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
            </div>
            <div
              onMouseEnter={handleFeaturesMouseEnter}
              onMouseLeave={handleFeaturesMouseLeave}
            >
              <DropdownMenuContent
                onMouseEnter={handleFeaturesMouseEnter}
                onMouseLeave={handleFeaturesMouseLeave}
                className={`w-[95vw] max-w-[920px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 md:p-4 z-[70] ${isRTL ? 'text-right' : 'text-left'}`}
                align="start"
                sideOffset={8}
                onCloseAutoFocus={(e) => e.preventDefault()}
                side="bottom"
                alignOffset={-20}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 md:gap-3">
                  {featuresLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.href}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                        <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-0.5 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {link.name}
                        </h3>
                        <p className={`text-xs text-gray-500 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu 
            modal={false} 
            open={resourcesOpen} 
            onOpenChange={setResourcesOpen}
          >
            <div
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
              className="pointer-events-auto"
            >
              <DropdownMenuTrigger asChild>
                <button 
                  className={`nav-menu-trigger flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-1'} px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-800`}
                  onBlur={(e) => e.currentTarget.blur()}
                  aria-label={language === 'ar' ? 'قائمة الموارد' : 'Resources menu'}
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                >
                  <span>{t('nav.resources')}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
              </DropdownMenuTrigger>
            </div>
            <div
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <DropdownMenuContent
                onMouseEnter={handleResourcesMouseEnter}
                onMouseLeave={handleResourcesMouseLeave}
                className={`w-[90vw] max-w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 z-[70] ${isRTL ? 'text-right' : 'text-left'}`}
                align="start"
                sideOffset={8}
                onCloseAutoFocus={(e) => e.preventDefault()}
                side="bottom"
                alignOffset={-20}
              >
                <div className="flex flex-col gap-2">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer ${isRTL ? 'flex-row-reverse' : ''}`}
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                        <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-0.5 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {link.name}
                        </h3>
                        <p className={`text-xs text-gray-500 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              cn(
                "nav-link px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap pointer-events-auto",
                isActive && "nav-link--active"
              )
            }
            aria-label={language === 'ar' ? 'من نحن' : 'About OfficeKit HR'}
          >
            {t('nav.about')}
          </NavLink>

          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              cn(
                "nav-link px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap pointer-events-auto",
                isActive && "nav-link--active"
              )
            }
            aria-label={language === 'ar' ? 'عرض خطط الأسعار' : 'View pricing plans'}
          >
            {t('nav.pricing')}
          </NavLink>
        </div>

        {/* Desktop CTA Buttons */}
        <div className={`hidden lg:flex items-center gap-1.5 xl:gap-2 flex-shrink-0 ${isRTL ? 'mr-auto' : 'ml-auto'} relative z-10`}>
          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110 active:scale-95 w-9 h-9 flex-shrink-0"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </button>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className={`bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-full px-5 py-2.5 text-sm lg:text-base font-medium transition-all duration-300 group shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] flex items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
              {t('nav.getStarted')}
              <ArrowRight className={`h-4 w-4 transition-all duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 mr-2' : 'ml-2'} ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
            </Button>
          </Link>
        </div>
      </NavBody>
      ) : null}

      {!isDesktopNav ? (
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className={`flex items-center gap-2 sm:gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
            {/* WhatsApp Button - Mobile */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </button>
            <div data-hamburger>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? (language === 'ar' ? 'إغلاق قائمة التنقل' : 'Close navigation menu') : (language === 'ar' ? 'فتح قائمة التنقل' : 'Open navigation menu')}
                aria-expanded={isMobileMenuOpen}
              />
            </div>
          </div>
        </MobileNavHeader>
        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={closeMenu}>
          <div data-mobile-menu className={`w-full flex flex-col h-full ${isRTL ? 'text-right' : 'text-left'}`}>
            {/* Close Button at Top */}
            <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'} mb-4`}>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                aria-label={language === 'ar' ? 'إغلاق القائمة' : 'Close menu'}
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            {/* Language Switcher - Mobile */}
            <div className={`flex items-center gap-2 px-3 py-2 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <Globe className="h-4 w-4 text-black/60" />
              <button
                onClick={() => handleLanguageChange('en')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  language === 'en' ? 'bg-[#0055ff] text-white' : 'bg-gray-100 text-black/70'
                }`}
              >
                English
              </button>
              <button
                onClick={() => handleLanguageChange('ar')}
                className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  language === 'ar' ? 'bg-[#0055ff] text-white' : 'bg-gray-100 text-black/70'
                }`}
              >
                العربية
              </button>
            </div>

            <div className="space-y-1 w-full">
              <button
                type="button"
                className={`w-full flex items-center justify-between py-2.5 px-4 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'} font-medium text-sm text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'features' ? null : 'features');
                }}
                aria-expanded={openDropdown === 'features'}
                aria-label={language === 'ar' ? 'قائمة الميزات' : 'Features menu'}
                aria-haspopup="true"
              >
                <span>{t('nav.features')}</span>
                <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                  openDropdown === 'features' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                }`} aria-hidden="true" />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === 'features' ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`space-y-1 ${isRTL ? 'pr-4' : 'pl-4'} pt-2`}>
                  {featuresLinks.map((link, index) => (
                    <Link
                      key={link.id}
                      to={link.href}
                      className={`flex items-start gap-3 w-full px-3 py-2.5 rounded-md text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-[#0055ff] group transform ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : 'hover:translate-x-1'}`}
                      style={{
                        animationDelay: openDropdown === 'features' ? `${index * 30}ms` : '0ms'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMenu();
                      }}
                    >
                      <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>{link.name}</h3>
                        <p className={`text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1 w-full mt-2">
              <button
                type="button"
                className={`w-full flex items-center justify-between py-2.5 px-4 ${isRTL ? 'text-right flex-row-reverse' : 'text-left'} font-medium text-sm text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2`}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'resources' ? null : 'resources');
                }}
                aria-expanded={openDropdown === 'resources'}
                aria-label={language === 'ar' ? 'قائمة الموارد' : 'Resources menu'}
                aria-haspopup="true"
              >
                <span>{t('nav.resources')}</span>
                <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                  openDropdown === 'resources' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                }`} aria-hidden="true" />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === 'resources' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className={`space-y-1 ${isRTL ? 'pr-4' : 'pl-4'} pt-2`}>
                  {resourcesLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={`flex items-start gap-3 w-full px-3 py-2.5 rounded-md text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-[#0055ff] group transform ${isRTL ? 'flex-row-reverse hover:-translate-x-1' : 'hover:translate-x-1'}`}
                      style={{
                        animationDelay: openDropdown === 'resources' ? `${index * 30}ms` : '0ms'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMenu();
                      }}
                    >
                      <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>{link.name}</h3>
                        <p className={`text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200 ${isRTL ? 'text-right' : 'text-left'}`}>{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/about-us"
              className={`block py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50 mt-2 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2 ${isRTL ? 'text-right' : 'text-left'}`}
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
              aria-label={language === 'ar' ? 'من نحن' : 'About OfficeKit HR'}
            >
              {t('nav.about')}
            </Link>

            <Link
              to="/pricing"
              className={`block py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2 ${isRTL ? 'text-right' : 'text-left'}`}
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
              aria-label={language === 'ar' ? 'عرض خطط الأسعار' : 'View pricing plans'}
            >
              {t('nav.pricing')}
            </Link>

            <Link 
              to="/contact" 
              onClick={(e) => {
                e.stopPropagation();
                closeMenu();
              }}
              className="block mt-4"
              aria-label={language === 'ar' ? 'اتصل بـ OfficeKit HR' : 'Contact OfficeKit HR'}
            >
              <Button className="bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-xl w-full h-[44px] text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2">
                {t('nav.getStarted')}
              </Button>
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
      ) : null}
    </Navbar>
    </>
  );
};

export default Navigation;
