import { CalendlyEmbed } from "@/components/CalendlyEmbed";

/** Inline demo booking — use on landing pages and feature sections. */
function Bookademo() {
  return (
    <section className="py-12" aria-labelledby="book-demo-heading">
      <h2 id="book-demo-heading" className="sr-only">
        Book a demo
      </h2>
      <CalendlyEmbed />
    </section>
  );
}

export default Bookademo;
