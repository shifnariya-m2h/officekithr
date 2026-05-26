"use client";
import { useState, useEffect, useRef } from "react";
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
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
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
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const featuresTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
    { name: "Employee Management", href: "/features/employee-management", icon: IdCard, description: "All employee data, unified." },
    { name: "Employee Self Service", href: "/features/self-service-portal", icon: UserCheck, description: "Self-service for employees." },
    { name: "Exit Management", href: "/features/exit-management", icon: LogOut, description: "Smooth exit process." },
    { name: "Mobile App", href: "/features/mobile-app", icon: Smartphone, description: "Workspace in our Pocket." },
    { name: "Face Kit", href: "/features/face-kit", icon: ScanFace, description: "Advanced facial recognition." },
    { name: "AI Pilot", href: "/features/ai-pilot", icon: Bot, description: "AI-powered HR assistance." },
  ];

  const resourcesLinks = [
    { name: "Blogs", href: "/resources/blogs", icon: BookOpen, description: "Latest insights and updates." },
    { name: "HR Software UAE", href: "/hr-software-uae", icon: Lightbulb, description: "WPS payroll & GCC HR." },
    { name: "HRMS India", href: "/hrms-software-india", icon: Lightbulb, description: "Statutory payroll & HRMS." },
    { name: "Compare vendors", href: "/compare", icon: Lightbulb, description: "OfficeKit vs Keka, greytHR." },
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
  const NavbarLogo = () => {
    return (
      <Link to="/" className="relative z-20 mr-2 sm:mr-4 flex items-center space-x-2 px-2 py-1 transition-all duration-300 group/nav flex-shrink-0">
        <img
          src="/NavLogo.webp"
          alt="OfficeKit HR - AI-Powered HRMS Software"
          className="w-auto h-8 sm:h-10 transition-all duration-300 [.group\\/nav[data-visible='true']_&]:h-6 [.group\\/nav[data-visible='true']_&]:sm:h-7"
          loading="eager"
          width={120}
          height={40}
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
        <div className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 sm:space-x-1.5 md:space-x-2 lg:space-x-2 xl:space-x-3 2xl:space-x-4 lg:flex pointer-events-none">
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
                  className="nav-menu-trigger flex items-center space-x-1 px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-800"
                  onBlur={(e) => e.currentTarget.blur()}
                  aria-label="Features menu"
                  aria-expanded={featuresOpen}
                  aria-haspopup="true"
                >
                  <span>Features</span>
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
              className="w-[90vw] max-w-[600px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 md:p-4 z-[70]"
              align="start"
              sideOffset={8}
              onCloseAutoFocus={(e) => e.preventDefault()}
              side="bottom"
              alignOffset={-20}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 md:gap-3">
                {featuresLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                      <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-0.5">
                        {link.name}
                      </h3>
                      <p className="text-xs text-gray-600 transition-colors duration-200">
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
                  className="nav-menu-trigger flex items-center space-x-1 px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-sm lg:text-base font-medium whitespace-nowrap dark:text-neutral-300 dark:hover:bg-neutral-800"
                  onBlur={(e) => e.currentTarget.blur()}
                  aria-label="Resources menu"
                  aria-expanded={resourcesOpen}
                  aria-haspopup="true"
                >
                  <span>Resources</span>
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
              className="w-[90vw] max-w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 mt-2 p-3 z-[70]"
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
                    className="flex items-start gap-2.5 p-2.5 rounded-lg transition-all duration-200 hover:bg-blue-50 hover:shadow-sm group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-gray-100 group-hover:bg-[#0055ff] flex items-center justify-center transition-all duration-200">
                      <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-white transition-colors duration-200" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm text-gray-900 group-hover:text-[#0055ff] transition-colors duration-200 mb-0.5">
                        {link.name}
                      </h3>
                      <p className="text-xs text-gray-600 transition-colors duration-200">
                        {link.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </DropdownMenuContent>
            </div>
          </DropdownMenu>

          <Link 
            to="/about-us" 
            className="nav-link px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm lg:text-base font-medium whitespace-nowrap pointer-events-auto focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
            aria-label="About OfficeKit HR"
          >
            About us
          </Link>

          <Link 
            to="/pricing" 
            className="nav-link px-2 sm:px-2.5 md:px-3 lg:px-3 xl:px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-[#0055ff] transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 text-sm lg:text-base font-medium whitespace-nowrap pointer-events-auto focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
            aria-label="View pricing plans"
          >
            Pricing
          </Link>
        </div>

        {/* Desktop CTA Buttons */}
        <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 flex-shrink-0 ml-auto relative z-10">
          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] rounded-full flex items-center justify-center shadow-md transition-all duration-300 transform hover:scale-110 active:scale-95 min-w-11 min-h-11 w-11 h-11 flex-shrink-0"
            aria-label="Chat with OfficeKit HR on WhatsApp"
          >
            <WhatsAppIcon size={20} />
          </button>

          {/* Contact Button */}
          <Link to="/contact">
            <Button className="bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-full px-5 py-2.5 text-sm lg:text-base font-medium transition-all duration-300 group shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
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
              className="bg-[#25D366] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 min-w-11 min-h-11 w-11 h-11 flex-shrink-0"
              aria-label="Chat with OfficeKit HR on WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </button>
            <div data-hamburger>
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isMobileMenuOpen}
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
                className="w-full flex items-center justify-between py-2.5 px-4 text-left font-medium text-sm text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenDropdown(openDropdown === 'features' ? null : 'features');
                }}
                aria-expanded={openDropdown === 'features'}
                aria-label="Features menu"
                aria-haspopup="true"
              >
                <span>Features</span>
                <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                  openDropdown === 'features' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                }`} aria-hidden="true" />
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
                      <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm transition-colors duration-200">{link.name}</h3>
                        <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-200">{link.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-1 w-full mt-2">
                <button
                  type="button"
                  className="w-full flex items-center justify-between py-2.5 px-4 text-left font-medium text-sm text-gray-800 hover:text-[#0055ff] transition-colors duration-200 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenDropdown(openDropdown === 'resources' ? null : 'resources');
                  }}
                  aria-expanded={openDropdown === 'resources'}
                  aria-label="Resources menu"
                  aria-haspopup="true"
                >
                  <span>Resources</span>
                  <ChevronDown className={`h-4 w-4 transition-all duration-300 ease-in-out flex-shrink-0 text-gray-600 ${
                    openDropdown === 'resources' ? 'rotate-180 text-[#0055ff]' : 'rotate-0'
                  }`} aria-hidden="true" />
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
                        <link.icon className="h-4 w-4 text-[#0055ff] group-hover:text-[#0055ff] flex-shrink-0 mt-0.5 transition-colors duration-200" />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm transition-colors duration-200">{link.name}</h3>
                          <p className="text-xs text-gray-600 group-hover:text-gray-800 transition-colors duration-200">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/about-us"
                className="block py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50 mt-2 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
                aria-label="About OfficeKit HR"
              >
                About us
              </Link>

              <Link
                to="/pricing"
                className="block py-2.5 px-4 text-sm font-medium text-gray-800 hover:text-[#0055ff] transition-colors rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2"
                onClick={(e) => {
                  e.stopPropagation();
                  closeMenu();
                }}
                aria-label="View pricing plans"
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
                aria-label="Contact OfficeKit HR"
              >
                <Button className="bg-[#0055ff] hover:bg-[#0044cc] text-white rounded-xl w-full h-[44px] text-sm font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#0055ff] focus:ring-offset-2">
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