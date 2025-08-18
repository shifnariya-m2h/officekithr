import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuresLinks = [
    { name: "Recruitment Management", href: "/features/recruitment-management" },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave" },
    { name: "Payroll and Compliance", href: "/features/payroll-and-compliance" },
    { name: "Performance Management", href: "/features/performance-appraisal" },
    { name: "Employee Management", href: "/features/employe-managment" },
    { name: "Employee Self Service", href: "/features/self-service-portal" },
    { name: "Exit Management", href: "/features/exit-management" },
    { name: "Mobile App", href: "/features/mobile-app" },
   ];

  const productLinks = [
    { name: "Recruitment & Onboarding", href: "/features" },
    { name: "Performance Management", href: "/pricing" },
    { name: "HRIS", href: "/about-us" },
    { name: "Payroll Management", href: "/contact" },
    { name: "Other Modules", href: "/contact" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "Use Cases", href: "/resources/use-cases" },
    { name: "Community", href: "/resources/community" },
  ];

  return (
    <nav
      className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-soft"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="/lovable-uploads/2aaf2fda-9fcb-425a-86fc-4b2bc5b1ead0.png"
              alt="OfficeKit"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-foreground hover:text-primary">
                <span>Features</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border-border shadow-medium">
                {featuresLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-foreground hover:text-primary">
                <span>Product</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-background border-border shadow-medium">
                {productLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu> */}

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-foreground hover:text-primary">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border shadow-medium">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} asChild>
                    <Link
                      to={link.href}
                      className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/about-us" className="nav-link text-foreground hover:text-primary">
              About Us
            </Link>

            <Link to="/pricing" className="nav-link text-foreground hover:text-primary">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              {/* <Button className="btn-cta">Contact Us</Button> */}
              <Button className="btn-cta group h-[44px]">
                Schedule Demo
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border shadow-medium">
            <div className="px-4 py-6 space-y-4">
              <div className="space-y-2">
                <p className="font-semibold text-foreground">Features</p>
                {featuresLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block pl-4 py-2 text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="space-y-2">
                <p className="font-semibold text-foreground">Resources</p>
                {resourcesLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block pl-4 py-2 text-muted-foreground hover:text-primary"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about-us"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/pricing"
                className="block py-2 text-foreground hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="btn-cta w-full">Contact Us</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;