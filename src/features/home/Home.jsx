import { Header } from "../../components/layout/Header";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { SelectedWorks } from "./SelectedWorks";
import { Newsletter } from "./Newsletter";

export const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <SelectedWorks />
        <Newsletter />
      </main>

      <footer className="py-20 bg-[var(--bg)] border-t border-[var(--border)]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold uppercase mb-4">
                Let's Create Together
              </h3>
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-[var(--accent)] text-white font-medium uppercase text-xs tracking-widest hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
              >
                Start a Project
              </a>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Connect</h4>
              <p className="text-[var(--muted)]">Phone: +237 680 692 014</p>
              <p className="text-[var(--muted)]">
                Email: sangwa.jesly@gmail.com
              </p>
              <p className="text-[var(--muted)]">Location: Bamenda, Cameroon</p>
            </div>
            <div>
              <h4 className="font-bold uppercase mb-2">Navigate</h4>
              <ul className="text-[var(--muted)] space-y-1">
                <li>
                  <a href="/" className="hover:text-[var(--fg)]">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[var(--fg)]">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:text-[var(--fg)]">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="/resources" className="hover:text-[var(--fg)]">
                    Resources
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-[var(--fg)]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-[var(--fg)]">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-[var(--muted)] font-mono text-xs uppercase tracking-widest">
            © 2025 Sangwa Jesly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
