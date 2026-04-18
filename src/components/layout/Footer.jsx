import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-20 bg-[var(--bg)] border-t border-[var(--border)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold uppercase mb-4">
              Let's Create Together
            </h3>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-[var(--accent)] text-white font-medium uppercase text-xs tracking-widest hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
            >
              Start a Project
            </Link>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-2">Connect</h4>
            <p className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
              <a href="tel:+237682833601">+237 682 833 601</a>
            </p>
            <p className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
              <a href="mailto:sangwajesly82@gmail.com">sangwajesly82@gmail.com</a>
            </p>
            <p className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors">
              <a href="https://wa.me/237682833601" target="_blank" rel="noopener noreferrer">
                WhatsApp: +237 682 833 601
              </a>
            </p>
            <p className="text-[var(--muted)] mt-2">Location: Bamenda, Cameroon</p>
          </div>
          <div>
            <h4 className="font-bold uppercase mb-2">Navigate</h4>
            <ul className="text-[var(--muted)] space-y-1">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Projects", path: "/projects" },
                { name: "Resources", path: "/resources" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-[var(--fg)]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[var(--muted)] font-mono text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Sangwa Jesly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
