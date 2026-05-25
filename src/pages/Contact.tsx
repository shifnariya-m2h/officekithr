import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      {/* <section className="pt-32 bg-gradient-subtle"> */}
        {/* <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Let's Connect
            </h1>
            <p className="text-xl text-muted-foreground">
              Have a question? Want to see a demo? We're here to help.
            </p>
          </div>
        </div> */}
      {/* </section> */}

      <ContactSection headingLevel="h1" />

      <Footer />
    </div>
  );
};

export default Contact;