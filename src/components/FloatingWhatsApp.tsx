"use client";

import { siteConfig } from "@/lib/config";
import { FaWhatsapp } from "react-icons/fa6";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <FaWhatsapp size={28} className="shrink-0" />
      </a>
    </aside>
  );
}
