import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

export const Contact = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-12">
              Let's Connect
            </h1>
            <p className="text-lg text-[var(--muted)] mb-8">
              Ready to bring your ideas to life? Whether it's a new web
              application, brand redesign, or AI automation solution, I'd love
              to hear about your project.
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold uppercase mb-2">Email</h3>
                <a
                  href="mailto:sangwa.jesly@gmail.com"
                  className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  sangwa.jesly@gmail.com
                </a>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2">Phone</h3>
                <a
                  href="tel:+237680692014"
                  className="text-[var(--muted)] hover:text-[var(--fg)] transition-colors"
                >
                  +237 680 692 014
                </a>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-2">Location</h3>
                <p className="text-[var(--muted)]">Bamenda, Cameroon</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4">
            <form className="space-y-6">
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors"
                />
              </div>
              <div>
                <label className="block font-mono text-xs uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-[var(--accent)] text-white font-medium uppercase text-sm tracking-wider hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
