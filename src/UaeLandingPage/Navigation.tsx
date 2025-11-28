"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link } from "react-router-dom"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const featuresLinks = [
    { name: "Recruitment Management", href: "/features/recruitment-management" },
    { name: "Employee Self Service", href: "/features/self-service-portal" },
    { name: "Employee Management", href: "/features/employe-managment" },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave" },
    { name: "Payroll & Compliance", href: "/features/payroll-and-compliance" },
    { name: "Performance Management", href: "/features/performance-appraisal" },
    { name: "Exit Management", href: "/features/exit-management" },
    { name: "Mobile App", href: "/features/mobile-app" },
    { name: "Face Kit", href: "/features/face-kit" },
    { name: "AI Pilot", href: "/features/ai-pilot" },
  ]

  const resourcesLinks = [{ name: "Blogs", href: "/resources/blogs" }]

  return (
    <nav className="fixed top-0 left-0 w-full right-0 z-50">
      <div className={`mx-4 transition-all duration-300 ${isScrolled ? "mt-2" : "mt-4"}`}>
        <div
          className={`relative rounded-2xl backdrop-blur-md border transition-all duration-300 ${
            isScrolled ? "bg-white/95 border-black/10 shadow-md" : "bg-white/90 border-black/5 shadow-lg"
          }`}
        >
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <Link to="/"> 
                <img src="/NavLogo.png" alt="OfficeKit" className="h-10 w-auto" loading="lazy" />
                </Link>
              </div>

              {/* Desktop Navigation - Black Text */}
              <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
                {/* Features Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-black/80 hover:text-black transition-colors duration-200 group">
                    <span>Features</span>
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-64 bg-white border-black/10 shadow-xl rounded-xl">
                    {featuresLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <a
                          href={link.href}
                          className="text-black/70 hover:text-black hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-200 cursor-pointer"
                        >
                          {link.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Resources Dropdown */}
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-black/80 hover:text-black transition-colors duration-200 group">
                    <span>Resources</span>
                    <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 bg-white border-black/10 shadow-xl rounded-xl">
                    {resourcesLinks.map((link) => (
                      <DropdownMenuItem key={link.href} asChild>
                        <a
                          href={link.href}
                          className="text-black/70 hover:text-black hover:bg-blue-50 px-4 py-2 rounded-md transition-all duration-200 cursor-pointer"
                        >
                          {link.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>

                <a href="/about-us" className="text-black/80 hover:text-black transition-colors duration-200">
                  About
                </a>
                <a href="/pricing" className="text-black/80 hover:text-black transition-colors duration-200">
                  Pricing
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center gap-3">
                {/* WhatsApp Button */}
                <button
                  onClick={() => window.open("https://wa.me/917994154069", "_blank")}
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-lg"
                >
                  <i className="bi bi-whatsapp text-white text-lg"></i>
                </button>

                {/* Get Started Button */}
                <a href="/contact">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700 px-6 h-10 font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button className="lg:hidden text-black p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden pb-4 space-y-3 border-t border-black/5 pt-4">
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-black/60">Features</p>
                  {featuresLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-black/70 hover:text-black hover:bg-blue-50 py-2 px-3 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-black/60">Resources</p>
                  {resourcesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-black/70 hover:text-black hover:bg-blue-50 py-2 px-3 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>

                <a
                  href="/about-us"
                  className="block text-black/70 hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/pricing"
                  className="block text-black/70 hover:text-black py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>

                <div className="pt-2 space-y-2">
                  <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 py-2 rounded-full">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
