import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ArrowRight, ChevronDown, Menu, X, Users,
  Calendar,
  FileText,
  BarChart3,
  IdCard,
  UserCheck,
  LogOut,
  Smartphone,
  Briefcase,
  Target,
  Database,
  Wallet,
  Grid,
  BookOpen,
  ScanFace,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { loadSyncoraBot } from "../components/syncoraBot";

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
    { name: "Recruitment Management", href: "/features/recruitment-management", icon: Users },
    { name: "Employee Self Service", href: "/features/self-service-portal", icon: UserCheck },
    { name: "Employee Management", href: "/features/employe-managment", icon: IdCard },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave", icon: Calendar },
    { name: "Payroll and Compliance", href: "/features/payroll-and-compliance", icon: FileText },
    { name: "Performance Management", href: "/features/performance-appraisal", icon: BarChart3 },
    { name: "Exit Management", href: "/features/exit-management", icon: LogOut },
    { name: "Mobile App", href: "/features/mobile-app", icon: Smartphone },
    { name: "Face Lens", href: "/features/face-lens", icon: ScanFace },

  ];

  const productLinks = [
    { name: "Recruitment & Onboarding", href: "/features", icon: Briefcase },
    { name: "Performance Management", href: "/pricing", icon: Target },
    { name: "HRIS", href: "/about-us", icon: Database },
    { name: "Payroll Management", href: "/contact", icon: Wallet },
    { name: "Other Modules", href: "/contact", icon: Grid },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/resources/blog", icon: BookOpen },
    // { name: "Use Cases", href: "/resources/use-cases", icon: Lightbulb },
    // { name: "Community", href: "/resources/community", icon: Users },
  ];


  return (
    <nav
      className={` right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-soft"
        : " "
        }`}
    >
 
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2  ">
            <img
              src="/Nav Logo2.png"
              alt="OfficeKit"
              className="h-11 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-semibold text-[15px] lg:text-[16px]">
            {/* Features Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1">
                <span>Features</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[500px] grid grid-cols-2 gap-2 p-2 border-border mt-4"
              >
                {featuresLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    asChild
                    className="focus:bg-[#0055ff] focus:text-white hover:bg-[#0055ff] hover:text-white"
                  >
                    <Link
                      to={link.href}
                      className="flex items-center w-full px-4 py-2 rounded-md transition-all duration-200"
                    >
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center space-x-1 text-foreground hover:text-primary ">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48 bg-background border-border shadow-medium">
                {resourcesLinks.map((link) => (
                  // <DropdownMenuItem key={link.href} asChild>
                  //   <Link
                  //     to={link.href}
                  //     className="w-full px-4 py-2 text-foreground hover:text-primary hover:bg-primary/5"
                  //   >
                  //     <link.icon className="h-4 w-4 mr-2" />

                  //     {link.name}
                  //   </Link>
                  // </DropdownMenuItem>


                  <DropdownMenuItem
                    key={link.href}
                    asChild
                    className="focus:bg-[#0055ff] focus:text-white hover:bg-[#0055ff] hover:text-white"
                  >
                    <Link
                      to={link.href}
                      className="flex items-center w-full px-4 py-2 rounded-md transition-all duration-200"
                    >
                      <link.icon className="h-4 w-4 mr-2" />
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
            {/* <Link to="/contact"> */}
            {/* <Button className="btn-cta">Contact Us</Button> */}
            <Link to="/contact"> 
            <Button className="btn-cta group h-[44px]" >
              Schedule Demo
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            </Link>
            {/* </Link> */}
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
                    className="flex items-center w-full px-4 py-2 rounded-md text-black transition-all duration-200 hover:bg-[#0055ff] hover:text-white"
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