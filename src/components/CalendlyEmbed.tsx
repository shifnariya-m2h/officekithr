/** Calendly inline embed — loads on interaction for performance. */
export function CalendlyEmbed() {
  return (
    <div className="rounded-2xl border bg-card overflow-hidden">
      <iframe
        title="Book OfficeKit HR demo on Calendly"
        src="https://calendly.com/officekithr/demo?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=0055ff"
        width="100%"
        height="620"
        className="border-0 w-full min-h-[520px] md:min-h-[620px]"
        loading="lazy"
      />
    </div>
  );
}
