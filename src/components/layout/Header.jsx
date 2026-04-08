import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-[var(--bg)]/80 backdrop-blur-md border-b border-[var(--border)]"
          : "py-8"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className="font-bold uppercase tracking-tighter text-xl leading-none">
            Sangwa Jesly
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--muted)]">
            Engineer / Designer
          </span>
        </Link>

        <div className="hidden md:flex gap-12 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Resources", path: "/resources" },
            { name: "Blog", path: "/blog" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="group relative font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          <Link
            to="/contact"
            className="ml-4 px-5 py-2 border border-[var(--border)] hover:border-[var(--fg)] transition-all text-[10px] uppercase tracking-widest"
          >
            Let's Talk
          </Link>
        </div>

        <button className="md:hidden">
          <span className="sr-only">Menu</span>
          <div className="w-6 h-6 flex flex-col justify-center">
            <span className="w-full h-[1px] bg-[var(--fg)] mb-1" />
            <span className="w-full h-[1px] bg-[var(--fg)] mb-1" />
            <span className="w-full h-[1px] bg-[var(--fg)]" />
          </div>
        </button>
      </div>
    </nav>
  );
};
