import { whatsappUrl } from "@/lib/site-data";
import { IconWhatsApp } from "./icons";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-8 sm:right-8"
      aria-label="Agendar consulta pelo WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
