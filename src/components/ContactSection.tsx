import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Mail, Phone, MapPin } from "lucide-react";
import { Badge } from "./ui/badge";
import { useToast } from "@/hooks/use-toast";
import { buildUtmSource, submitLead } from "@/lib/api/leads";
import { trackDemoConversion } from "@/lib/analytics";
import { SEO_ASSETS } from "@/lib/seo/assets";

type ContactSectionProps = {
  /** Use h1 only on /contact; homepage uses h2 to avoid duplicate H1s. */
  headingLevel?: "h1" | "h2";
};

const ContactSection = ({ headingLevel = "h2" }: ContactSectionProps) => {
  const HeadingTag = headingLevel;
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companySize: "",
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
    const res = await submitLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      message__c: `Company size: ${formData.companySize}`,
      source: buildUtmSource("contact"),
    });

    if (res.ok) {
      trackDemoConversion("contact_form");

      toast({
        title: "Success",
        variant: "success",
        description: "Demo scheduled successfully!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        companySize: "",
      });
    } else {
      const errorText = await res.text();
      toast({
        title: "Error",
        variant: "destructive",
        description:
          "❌ There was a problem submitting your request.\n" + errorText,
      });
    }
  } catch (error) {
    toast({
      title: "Error",
      variant: "destructive",
      description: "⚠️ Network error. Please try again later.",
    });
  } finally {
    setLoading(false);
  }
};



  return (
    <>
      {/* 🔹 Top Section */}
      <section
        className="relative bg-cover bg-center py-28 text-center"
        style={{ backgroundImage: `url('${SEO_ASSETS.sectionBg}')` }}
      >
        <div className="relative container mx-auto px-4">
          <Badge className="bg-white font-normal py-2 text-[#1d4ed8] mb-4 border border-[#ededed] hover:bg-transparent">
            Contact Us
          </Badge>
          <HeadingTag className="text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Ready to Transform <span className="gradient-text">Your HR?</span>
          </HeadingTag>
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
                      <Label htmlFor="name">Full Name <span className="required-asterisk"><span className="required-asterisk">*</span></span></Label>
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
                      <Label htmlFor="email">Email Address <span className="required-asterisk"><span className="required-asterisk">*</span></span></Label>
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
                      <Label htmlFor="phone">Phone Number <span className="required-asterisk"><span className="required-asterisk">*</span></span></Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName">Company Name <span className="required-asterisk"><span className="required-asterisk">*</span></span></Label>
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

                  {/* Company size */}
                  <div>
                    <Label htmlFor="companySize">
                      Company size <span className="required-asterisk">*</span>
                    </Label>
                    <select
                      id="companySize"
                      name="companySize"
                      required
                      value={formData.companySize}
                      onChange={(e) =>
                        setFormData({ ...formData, companySize: e.target.value })
                      }
                      className="mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    >
                      <option value="">Select employee count</option>
                      <option value="1-50">1–50 employees</option>
                      <option value="51-200">51–200 employees</option>
                      <option value="201-500">201–500 employees</option>
                      <option value="501-1000">501–1,000 employees</option>
                      <option value="1000+">1,000+ employees</option>
                    </select>
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
                      <a href="tel:+918137932991">+ 91 8137932991</a>
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
                      +971 55 315 5343 <br />
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
