import React from "react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppUrl } from "../../lib/whatsapp";

export const FloatingWhatsApp: React.FC = () => {
  const url = getWhatsAppUrl({ context: "general" });

  return (
    <aside aria-label="Quick WhatsApp contact">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 group flex items-center bg-[#25D366] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <WhatsAppIcon className="relative inline-flex h-5 w-5 text-white" />
        </span>
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
