import { Star, Quote } from "lucide-react";
import { Badge } from "./ui/badge";
import { TESTIMONIALS } from "@/data/testimonials-data";
import type { Testimonial } from "@/data/testimonials-data";
import { TestimonialAvatar } from "@/components/TestimonialAvatar";
import { FadeUpOnce } from "@/components/motion/FadeUpOnce";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="feature-card group relative flex h-full w-full flex-col overflow-hidden p-5 sm:p-6 lg:p-8">
      <div className="absolute top-5 right-5 text-primary/15" aria-hidden>
        <Quote className="h-7 w-7" />
      </div>

      <div
        className="mb-5 flex gap-0.5"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }, (_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-amber-400 text-amber-400"
            aria-hidden
          />
        ))}
      </div>

      <blockquote className="relative z-10 mb-6 flex-1 text-[0.9375rem] leading-relaxed text-foreground sm:text-base">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      <footer className="mt-auto flex items-center gap-3 border-t border-border/60 pt-5">
        <TestimonialAvatar testimonial={testimonial} />
        <div className="min-w-0">
          <p className="truncate font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-sm text-muted-foreground">{testimonial.role}</p>
          <p className="truncate text-xs text-muted-foreground/80">{testimonial.company}</p>
        </div>
      </footer>
    </article>
  );
}

const TestimonialsSection = () => {
  return (
    <section className="mb-16 sm:mb-24 lg:mb-mb-common bg-muted/30 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <FadeUpOnce className="mb-10 sm:mb-mb-tursioury text-center">
          <Badge className="mb-4 sm:mb-5 border border-[#ededed] bg-white px-5 py-2.5 text-sm font-medium text-[#1d4ed8] hover:bg-white">
            Testimonials
          </Badge>

          <h2 className="mb-3 sm:mb-4 text-3xl font-semibold text-foreground sm:text-4xl lg:mb-5 lg:text-5xl lg:leading-[1.2]">
            What Our <span className="gradient-text leading-snug">Clients Say</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
            Trusted by 500+ companies across India and the GCC.
          </p>
        </FadeUpOnce>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7 xl:grid-cols-4">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
