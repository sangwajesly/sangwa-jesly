import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

export const Newsletter = () => {
  return (
    <Section className="py-24 bg-[var(--border)]">
      <Grid>
        <div className="col-span-4 md:col-span-12 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">
            Stay Connected
          </h2>
          <p className="text-lg text-[var(--muted)] mb-12 max-w-2xl mx-auto">
            Get updates on new projects, insights on web development and design,
            and occasional thoughts on AI automation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 bg-[var(--bg)] border border-[var(--border)] text-[var(--fg)] placeholder-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
            />
            <button className="px-8 py-4 bg-[var(--accent)] text-white font-medium uppercase text-sm tracking-wider hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </Grid>
    </Section>
  );
};
