import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-300 mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        <Link href="/" className="font-serif font-bold text-xl hover:text-accent transition-colors">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#work" className="hover:text-accent transition-colors">Work</Link>
          <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
          <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
          <Link href="/#faq" className="hover:text-accent transition-colors">FAQ</Link>
          <a
            href={siteConfig.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent text-bg px-5 py-2.5 font-medium rounded-xl hover:opacity-90 transition-opacity"
          >
            Let&apos;s talk
          </a>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
