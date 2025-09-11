import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "./ui/badge";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    toast({
      title: "Demo Requested!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: ""
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="pb-20  bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge className="bg-white mb-2 font-normal py-2 text-[#3f5ffc]  border border-[#ededed] hover:bg-transparent"  >
            Contact Us
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6 lg:leading-[1.2]">
            Ready to Transform  <span className="leading-snug gradient-text"  >Your HR? </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto ">
            Book a free personalized demo with our team and explore <br></br> how OfficeKit can work for you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-16">
          {/* Contact Form */}
          <Card className="shadow-medium ">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Book Your Demo</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground font-medium">
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Your Company"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2"
                    rows={5}
                    placeholder="Your Messages"
                  />
                </div>

                <Button type="submit" className="btn-cta w-full group">
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Demo
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <p className="text-[16px] text-muted-foreground leading-relaxed">
                Have questions or need assistance? Our team is here to help you find the perfect HR solution for your organization.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 text-primary rounded-lg p-3">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email Us</h4>
                  <p className="text-muted-foreground">hello@officekithr.com</p>
                 </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-50 text-green-600 rounded-lg p-3">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                  <p className="text-muted-foreground">+1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">Mon-Fri, 9 AM - 6 PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-50 text-purple-600 rounded-lg p-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Visit Us</h4>
                  <p className="text-muted-foreground">
                    #906, Palace Towers Dubai Silicon Oasis Dubai, UAE +971 551997892
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits */}
            {/* <div className="bg-primary-light rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4">What to Expect:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>30-minute personalized demo</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Discussion of your specific HR needs</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Custom pricing and implementation plan</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>No commitment required</span>
                </li>
              </ul>
            </div> */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;