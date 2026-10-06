"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      const contact = document.getElementById("contact");
      if (!hero || !contact) return;
      const heroBottom = hero.getBoundingClientRect().bottom;
      const contactTop = contact.getBoundingClientRect().top;
      const windowH = window.innerHeight;
      setVisible(heroBottom < 0 && contactTop > windowH);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-bg/95 backdrop-blur border-t border-border px-4 pb-[env(safe-area-inset-bottom,8px)] pt-3 flex gap-3">
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 bg-accent text-bg py-3 text-center text-sm font-bold rounded-xl min-h-[44px] flex items-center justify-center"
      >
        Chat on WhatsApp
      </a>
      <a
        href={"mailto:" + siteConfig.email}
        className="flex-1 border border-border text-fg py-3 text-center text-sm font-bold rounded-xl min-h-[44px] flex items-center justify-center"
      >
        Email
      </a>
    </div>
  );
}
