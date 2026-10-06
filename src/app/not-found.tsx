import Link from "next/link";
import { siteConfig } from "@/lib/config";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-mono text-accent text-sm uppercase tracking-widest mb-4">404</p>
      <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Page not found</h1>
      <p className="text-muted text-lg mb-8 max-w-md">Sorry, I couldn&apos;t find that page. It may have moved or no longer exists.</p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/" className="bg-accent text-bg px-8 py-4 font-bold rounded-xl hover:opacity-90 transition-opacity">Go home</Link>
        <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="border border-border text-fg px-8 py-4 font-bold rounded-xl hover:bg-surface transition-colors">Contact me</a>
      </div>
    </div>
  );
}