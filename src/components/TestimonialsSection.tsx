import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";
import { TESTIMONIALS } from "@/data/testimonials-data";

const TestimonialsSection = () => {
  return (
    <section className="mb-mb-common bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-mb-tursioury section-fade-in">
          <Badge className="bg-white mb-2 font-normal py-2 text-[#1d4ed8] border border-[#ededed] hover:bg-transparent">
            Testimonials
          </Badge>

          <h2 className="text-3xl lg:text-5xl font-semibold text-foreground mb-6 lg:leading-[1.2]">
            What Our <span className="leading-snug gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by 500+ companies across India and the GCC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="feature-card group relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="h-8 w-8" />
              </div>

              <div className="flex space-x-1 mb-6">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-foreground leading-relaxed mb-8 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company}`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover border-2 border-border group-hover:border-primary transition-colors"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
