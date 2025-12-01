"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ChevronDown, Menu, X, Users,
  Calendar,
  BarChart3,
  IdCard,
  UserCheck,
  LogOut,
  Smartphone,
  BookOpen,
  ScanFace,
  Bot,
  Coins,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Navbar,
  NavBody,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Close mobile menu when clicking outside and prevent body scroll
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMobileMenuOpen && !target.closest('[data-mobile-menu]') && !target.closest('[data-hamburger]')) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Navigation Links Data
  const featuresLinks = [
    { name: "Recruitment Management", href: "/features/recruitment-management", icon: Users, description: "Smarter hiring, simplified." },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave", icon: Calendar, description: "Easy time & leave." },
    { name: "Payroll and Compliance", href: "/features/payroll-and-compliance", icon: Coins, description: "Payroll made simple." },
    { name: "Performance Management", href: "/features/performance-appraisal", icon: BarChart3, description: "Drive better performance." },
    { name: "Employee Management", href: "/features/employe-managment", icon: IdCard, description: "All employee data, unified." },
    { name: "Employee Self Service", href: "/features/self-service-portal", icon: UserCheck, description: "Self-service for employees." },
    { name: "Exit Management", href: "/features/exit-management", icon: LogOut, description: "Smooth exit process." },
    { name: "Mobile App", href: "/features/mobile-app", icon: Smartphone, description: "Workspace in our Pocket." },
    { name: "Face Kit", href: "/features/face-kit", icon: ScanFace, description: "Advanced facial recognition." },
    { name: "AI Pilot", href: "/features/ai-pilot", icon: Bot, description: "AI-powered HR assistance." },
  ];

  const resourcesLinks = [
    { name: "Blogs", href: "/resources/blogs", icon: BookOpen, description: "Latest insights and updates." },
  ];

  // WhatsApp Handler
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/917994154069?text=" + encodeURIComponent("Hi OfficeKit HR"),
      "_blank"
    );
  };

  // Close Menu Handler
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };


  // Custom Logo Component
  const NavbarLogo = () => {
    return (
      <Link to="/" className="relative z-20 mr-2 sm:mr-4 flex items-center space-x-2 px-2 py-1 transition-all duration-300 group/nav">
        <img
          src="/NavLogo.png"
          alt="OfficeKit"
          className="w-auto h-8 sm:h-10 transition-all duration-300 [.group\\/nav[data-visible='true']_&]:h-6 [.group\\/nav[data-visible='true']_&]:sm:h-7"
          loading="lazy"
        />
      </Link>
    );
  };

  return (
    <Navbar className="!fixed !top-0 left-0 w-full right-0 z-50 pt-2 sm:pt-4 md:pt-6 lg:pt-8">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        
        {/* Desktop Navigation Items with Dropdowns */}
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1.5 lg:space-x-2 xl:space-x-3 lg:flex">
          {/* Features Dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button 
                className="nav-link flex items-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none border-none bg-transparent cursor-pointer px-2 lg:px-3 xl:px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
                onBlur={(e) => e.currentTarget.blur()}
              >
                <span>Features</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[90vw] max-w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 sm:p-4 md:p-5 z-[70]"
              align="start"
              sideOffset={8}
              onCloseAutoFocus={(e) => e.preventDefault()}
              side="bottom"
              alignOffset={-20}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {featuresLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                      <link.icon className="h-5 w-5 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-500 transition-colors duration-200">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Resources Dropdown */}
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
              <button 
                className="nav-link flex items-center space-x-1 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors focus:outline-none focus:ring-0 focus-visible:outline-none border-none bg-transparent cursor-pointer px-2 lg:px-3 xl:px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap"
                onBlur={(e) => e.currentTarget.blur()}
              >
                <span>Resources</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-180" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-[90vw] max-w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 sm:p-4 z-[70]"
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
                    className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                      <link.icon className="h-5 w-5 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-1">
                        {link.name}
                      </h3>
                      <p className="text-sm text-gray-500 transition-colors duration-200">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about-us" className="nav-link px-2 lg:px-3 xl:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap">
            About us
          </Link>

          <Link to="/pricing" className="nav-link px-2 lg:px-3 xl:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-xs sm:text-sm lg:text-base font-semibold whitespace-nowrap">
            Pricing
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-shrink-0">
          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110 active:scale-95 w-8 h-8 lg:w-9 lg:h-9"
            aria-label="WhatsApp"
          >
            <i className="bi bi-whatsapp text-white text-[18px] lg:text-[20px]"></i>
          </button>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-xl px-4 lg:px-5 py-2 lg:py-2.5 text-sm lg:text-base font-bold transition-all duration-300 group shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              Contact Us
              <ArrowRight className="ml-1.5 lg:ml-2 h-3.5 lg:h-4 w-3.5 lg:w-4 transition-all duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp Button - Mobile */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0"
              aria-label="WhatsApp"
            >
              <i className="bi bi-whatsapp text-white text-[18px] sm:text-[20px]"></i>
            </button>
            <div data-hamburger>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div data-mobile-menu className="w-full flex flex-col h-full">
            {/* Close Button at Top */}
            <div className="flex justify-end mb-4">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(false);
                }}
                className="p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>
            <div className="space-y-1 w-full">
              <button
                type="button"
                className="w-full flex items-center justify-between py-3 px-4 text-left font-bold text-base text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'features' ? null : 'features');
                }}
                aria-expanded={openDropdown === 'features'}
              >
                <span>Features</span>
                <ChevronDown className={`h-5 w-5 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                  openDropdown === 'features' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                }`} />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openDropdown === 'features' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-1 pl-4 pt-2">
                  {featuresLinks.map((link, index) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="flex items-start gap-3 w-full px-3 py-2.5 rounded-md text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-[#0055ff] group transform hover:translate-x-1"
                      style={{
                        animationDelay: openDropdown === 'features' ? `${index * 30}ms` : '0ms'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        closeMenu();
                      }}
                    >
                      <link.icon className="h-5 w-5 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-sm transition-colors duration-200">{link.name}</h3>
                        <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1 w-full mt-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-3 px-4 text-left font-bold text-base text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === 'resources' ? null : 'resources');
                  }}
                  aria-expanded={openDropdown === 'resources'}
                >
                  <span>Resources</span>
                  <ChevronDown className={`h-5 w-5 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                    openDropdown === 'resources' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                  }`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openDropdown === 'resources' ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="space-y-1 pl-4 pt-2">
                    {resourcesLinks.map((link, index) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="flex items-start gap-3 w-full px-3 py-2.5 rounded-md text-gray-700 transition-all duration-200 hover:bg-blue-50 hover:text-[#0055ff] group transform hover:translate-x-1"
                        style={{
                          animationDelay: openDropdown === 'resources' ? `${index * 30}ms` : '0ms'
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          closeMenu();
                        }}
                      >
                        <link.icon className="h-5 w-5 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm transition-colors duration-200">{link.name}</h3>
                          <p className="text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-200">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/about-us"
                className="block py-3 px-4 text-base font-bold text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50 mt-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
              >
                About us
              </Link>

              <Link
                to="/pricing"
                className="block py-3 px-4 text-base font-bold text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
              >
                Pricing
              </Link>

              <Link 
                to="/contact" 
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
                className="block mt-4"
              >
                <Button className="bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-xl w-full h-[44px] text-sm font-bold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
                  Contact Us
                </Button>
              </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
};

export default Navigation;