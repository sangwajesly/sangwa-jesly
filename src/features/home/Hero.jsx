import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";
import mypic from "../../assets/sangwa-jesly.jpg";

export const Hero = () => {
  return (
    <Section className="min-h-[90vh] flex items-start lg:items-center pt-32 pb-16">
      <Grid className="items-center gap-10 lg:gap-16">
        <div className="col-span-4 md:col-span-8 lg:col-span-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[0.9] font-display font-bold tracking-tight mb-8">
            Engineering <br />
            Digital <br />
            Experiences
          </h1>
          <div className="mb-12">
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-6 max-w-2xl">
              Where software meets strategy, and design drives innovation.
              Specializing in web development, brand design, and AI automation
              solutions.
            </p>
            <div className="flex flex-wrap gap-6 text-sm md:text-base font-mono uppercase tracking-wider">
              <span className="text-[var(--accent)]">Web Development</span>
              <span>•</span>
              <span>Brand Design</span>
              <span>•</span>
              <span>AI Automations</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-4 bg-[var(--fg)] text-[var(--bg)] font-medium uppercase text-sm tracking-widest hover:bg-[var(--accent)] transition-colors"
            >
              Explore Work
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 border border-[var(--fg)] text-[var(--fg)] font-medium uppercase text-sm tracking-widest hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-4 lg:col-span-4 flex items-center justify-center">
          <div className="text-center">
            <div className="">
              <img
                src={mypic}
                alt="Sangwa Jesly"
                className="rotate-3 border-8 grayscale grayscale-25 border-[var(--fg)] transition-all duration-500 hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </Grid>
    </Section>
  );
};
