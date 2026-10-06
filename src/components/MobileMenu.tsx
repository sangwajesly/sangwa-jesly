"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-fg"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg border-b border-border p-6 flex flex-col gap-6 text-lg">
          <Link href="/#work" onClick={() => setOpen(false)} className="hover:text-accent">Work</Link>
          <Link href="/#services" onClick={() => setOpen(false)} className="hover:text-accent">Services</Link>
          <Link href="/#about" onClick={() => setOpen(false)} className="hover:text-accent">About</Link>
          <Link href="/#faq" onClick={() => setOpen(false)} className="hover:text-accent">FAQ</Link>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-bg px-6 py-4 text-center font-medium rounded-xl"
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </a>
        </div>
      )}
    </div>
  );
}
