import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { FaGithub, FaLinkedin, FaFacebook, FaXTwitter, FaTiktok } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="max-w-300 mx-auto px-6 md:px-10 py-16 md:py-24">
        {/* Giant name wordmark */}
        <div className="mb-16">
          <p className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-none tracking-tight">
            Sangwa
            <br />
            <span className="md:ml-12">Jesly</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/#work" className="hover:text-accent transition-colors">Work</Link>
              <Link href="/#services" className="hover:text-accent transition-colors">Services</Link>
              <Link href="/#about" className="hover:text-accent transition-colors">About</Link>
              <Link href="/#faq" className="hover:text-accent transition-colors">FAQ</Link>
            </nav>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a href={"mailto:" + siteConfig.email} className="hover:text-accent transition-colors">
                {siteConfig.email}
              </a>
              <a href={"tel:" + siteConfig.phone.replace(/\s/g, "")} className="hover:text-accent transition-colors">
                {siteConfig.phone}
              </a>
              {siteConfig.location && <p className="text-muted">{siteConfig.location}</p>}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-4 items-center">
              {siteConfig.github && (
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  title="GitHub"
                  className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {siteConfig.linkedin && (
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                  className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <FaLinkedin size={18} />
                </a>
              )}
              {siteConfig.twitter && (
                <a
                  href={siteConfig.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (formerly Twitter)"
                  title="X (Twitter)"
                  className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <FaXTwitter size={18} />
                </a>
              )}
              {siteConfig.facebook && (
                <a
                  href={siteConfig.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  title="Facebook"
                  className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <FaFacebook size={18} />
                </a>
              )}
              {siteConfig.tiktok && (
                <a
                  href={siteConfig.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  title="TikTok"
                  className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <FaTiktok size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-sm text-muted">
          &copy; {year} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
