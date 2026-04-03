import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Twitter,
  Facebook,
  Mail,
  MapPin,
  Phone,
  ChevronDown,
  Instagram,
  YoutubeIcon,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const featuresLinks = [
    { name: "Recruitment Management", href: "/features/recruitment-management" },
    { name: "Attendance and Leave", href: "/features/attendance-and-leave" },
    { name: "Payroll and Compliance", href: "/features/payroll-and-compliance" },
    { name: "Performance Management", href: "/features/performance-appraisal" },
    { name: "Self Service Portal", href: "/features/self-service-portal" },
    { name: "Exit Management", href: "/features/exit-management" },
    { name: "Mobile App", href: "/features/mobile-app" },
    { name: "Face Kit", href: "/features/face-kit" },
  ];

  const resourcesLinks = [
    { name: "Blog", href: "/resources/blogs" },
    // { name: "Use Cases", href: "/resources/use-cases" },
    // { name: "Community", href: "/resources/community" },
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 pt-p-tursioury pb-[32px] text-gray-100">

      {/* Main Footer */}

      <div className="container mx-auto px-4">
        {/* Company Info */}
        <div className="lg:col-span-1 space-y-6">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/Footer logo2.png"
              alt="OfficeKit"
              className="h-11 w-auto brightness-0 invert"
              loading="lazy"
            />
          </Link>

          <p className="text-gray-300 leading-relaxed">
            Simplifying HR for everyone with smart, fast, and intuitive solutions <br></br> that help your team focus on what truly matters.
          </p>

          <div className="flex flex-col lg:flex-row justify-between items-start gap-6">
            {/* Social Icons */}
            <div className="flex space-x-2">
              <a href="https://www.linkedin.com/company/officekithr/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>

              <a href="https://www.facebook.com/officekithr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/officekit_hr/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/channel/UC8zUtDkAkZUkOl0TkMhQpNw" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-800">
                <YoutubeIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Newsletter Form */}
            {/* <div className="w-full lg:w-80 text-center lg:text-left">
              <h2 className="text-white font-semibold mb-2">Connect to us</h2>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
                  Subscribe
                </Button>
              </form>
            </div> */}
          </div>


        </div>
        <div className="border-t border-gray-700 opacity-50 my-6"></div>


        <div className="grid lg:grid-cols-5 gap-8 mt-12 mb-20">


          {/* Company Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <div className="space-y-3">
              <Link to="/about-us" className="block text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                Pricing
              </Link>
              {/* <Link to="/career" className="block text-gray-300 hover:text-white transition-colors">
                Careers
              </Link> */}
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                Contact Us
              </Link>

            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            <div className="space-y-3">
              {featuresLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>




          {/* <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Products</h3>
            <div className="space-y-3">
              <Link to="/about-us" className="block text-gray-300 hover:text-white transition-colors">
                prod1
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-white transition-colors">
                prod2
              </Link>
              <Link to="/career" className="block text-gray-300 hover:text-white transition-colors">
                prod3
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-colors">
                prod14
              </Link>
            </div>
          </div> */}

          {/* Resources */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Resources</h3>
            <div className="space-y-3">
              {resourcesLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Global Regions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Global</h3>
            <div className="space-y-3">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="block text-gray-300 hover:text-white transition-colors"></span>
                India
              </Link>
              <Link
                to="/ae"
                className="block text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
              >
                <span className="block text-gray-300 hover:text-white transition-colors"></span>
                UAE
              </Link>
            </div>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Contact</h3>

            {/* Contact Info */}
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:hello@officekithr.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  hello@officekithr.com
                </a>
              </div>

              <div className="flex items-start space-x-3 text-gray-300">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <a
                    href="tel:+917994154069"
                    className="hover:text-white transition-colors"
                  >
                    +91 7994154069
                  </a>
                  <br />
                  Ground floor, Cyber Park Calicut - 673 016
                </span>
              </div>

              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  <a
                    href="tel:+971528155771"
                    className="hover:text-white transition-colors"
                  >
                    +971 52 815 5771
                  </a>
                  <br />
                  <a
                    href="tel:+971551997892"
                    className="hover:text-white transition-colors"
                  >
                    +971 551997892
                  </a>
                  <br />
                  #105, Bushager Building, 13 55 St - Al Garhoud - Dubai
                </span>
              </div>
            </div>



          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 opacity-50 my-6"></div>
        <div className="container mx-auto px-2 py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 OfficeKit inc. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-and-condition"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookie-policy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="border-t border-gray-800"> */}

      {/* </div> */}
    </footer>
  );
};

export default Footer;