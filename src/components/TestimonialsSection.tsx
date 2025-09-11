import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mohideen Kader",
      role: "Head of HR",
      company: "Lulu International Exchange LLC",
      image: "/p2.svg",
      rating: 5,
      quote: "Officekit HR is an easy-to-use employee management software, fully customizable HRMS software which made our tedious tasks of daily HR process so easy. "
    },
    {
      name: "Anees",
      role: "Head of HR",
      company: "Thai Group  ",
      image: "/p3.svg",
      rating: 5,
      quote: "Officekit HR lets you shine, the top HR software in India, lets you put your thoughts together in a very concise format through the best HR software and it really helps you present your best phase."
    },
    // {
    //   name: "Venugopal",
    //   role: "Chief Executive Officer",
    //   company: "Buchprufer",
    //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    //   rating: 5,
    //   quote: "We have been using Officekit HR, the top HR software in India for the last couple of years, and has helped us through the growth, and management of our company."
    // }
  ];

  return (
    <section className="mb-mb-common bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-mb-tursioury section-fade-in">
          <Badge className="bg-white mb-2 font-normal py-2 text-[#3f5ffc]  border border-[#ededed] hover:bg-transparent"  >
            Testimonials
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6 lg:leading-[1.2]">
            What Our <span className="leading-snug gradient-text"  >Clients Say </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what HR professionals and business leaders say about OfficeKit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="feature-card group relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed mb-8 relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors"
                />
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        {/* <div className="mt-16 text-center section-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">4.9/5</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Support</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TestimonialsSection;