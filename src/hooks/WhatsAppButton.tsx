import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const WhatsAppButton = () => {
  const phone = "917994470903";
  const message = "Hi";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={openWhatsApp}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-[90px] z-[9998] flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-full bg-[#25D366] shadow-[0_4px_8px_rgba(0,0,0,0.2)] transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <WhatsAppIcon size={34} />
    </button>
  );
};

export default WhatsAppButton;
