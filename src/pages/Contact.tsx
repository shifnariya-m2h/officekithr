import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <ContactSection headingLevel="h1" />
      <section className="py-16 bg-muted/30 border-t">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-semibold text-center text-foreground mb-2">
            Or pick a time instantly
          </h2>
          <p className="text-center text-muted-foreground mb-8">
            Schedule a 30-minute demo with our HR specialists
          </p>
          <CalendlyEmbed />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;