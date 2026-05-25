import { FaWhatsapp } from "react-icons/fa";
import { cn } from "@/lib/utils";

type WhatsAppIconProps = {
  className?: string;
  size?: number;
};

/** WhatsApp glyph — does not rely on Bootstrap Icons CDN. */
export function WhatsAppIcon({ className, size = 20 }: WhatsAppIconProps) {
  return (
    <FaWhatsapp
      className={cn("text-white shrink-0", className)}
      size={size}
      aria-hidden
    />
  );
}
