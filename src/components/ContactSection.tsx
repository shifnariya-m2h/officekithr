import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useToast } from "@/hooks/use-toast"
const ContactSection = () => {
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {



    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://www.syncoraai.com/api/webhooks/website/LiQApK1h9PzXw4LtPUQe/leads",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Syncora-Public-Key": "PUB_d9f73a87-a96f-4549-949e-c6acd8ff21b2",
          },
          body: JSON.stringify(formData),
        }
      );



      if (res.ok) {

        if (window.gtag) {
          window.gtag('event', 'conversion', {
            send_to: 'AW-17365780413/MAzACIaay74bEL2P09hA'
          });
        }

        toast({
          title: "Success",
          variant: "success",
          description: "Demo scheduled successfully!",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          companyName: "",
          message: "",
        });
      } else {
        const t = await res.text();
        toast({
          title: "Error",
          variant: "destructive",
          description: "❌ There was a problem sending your form\n" + t,
        })
      }
    } catch (err) {
      alert("⚠️ Network error. Please try again later.");
      toast({
        title: "Error",
        variant: "destructive",
        description: "⚠️ Network error. Please try again later.",
      })
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔹 Top Section */}
      <section
        className="relative bg-cover bg-center py-28 text-center"
        style={{ backgroundImage: "url('/RecruitmentManagement2.png')" }}
      >
        <div className="relative container mx-auto px-4">
          <Badge className="bg-white font-normal py-2 text-[#3f5ffc] mb-4 border border-[#ededed] hover:bg-transparent">
            Contact Us
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Ready to Transform <span className="gradient-text">Your HR?</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Book a free personalized demo with our team and explore how
            OfficeKit can work for you.
          </p>
        </div>
      </section>

      {/* 🔹 Form + Info */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Form */}
            <Card
              className="shadow-medium bg-cover bg-center"
              style={{ backgroundImage: "url('/RecruitmentManagement-Bg.png')" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Book Your Demo
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name + Email */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your Company"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message"
                      rows={5}
                      className="mt-2"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="btn-cta w-full group"
                    disabled={loading}
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    {loading ? "Sending..." : "Book a Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Right: Info */}
            <div className="bg-white rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
                <p className="text-muted-foreground mb-4">
                  Have questions or need assistance? Our team is here to help
                  you find the perfect HR solution.
                </p>
                <p className="text-muted-foreground mb-10">
                  Whether you’re a small business or a large enterprise, we’ve
                  got you covered with tailored solutions.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 text-primary rounded-lg p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <p className="text-sm text-muted-foreground">
                      <a href="mailto:hello@officekithr.com">
                        hello@officekithr.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 text-green-600 rounded-lg p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <p>
                      <a href="tel:+917994154069">+91 7994154069</a>
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Mon-Fri, 9 AM - 6 PM IST
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-50 text-purple-600 rounded-lg p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p className="text-muted-foreground">
                      +971 52 815 5771 <br />
                      +971 55 199 7892 <br />
                      #105, Bushager Building <br />
                      13 55 St, Al Garhoud, Dubai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
