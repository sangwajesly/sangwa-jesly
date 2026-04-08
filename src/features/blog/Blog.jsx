import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

export const Blog = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-12 text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
              Blog
            </h1>
            <p className="text-lg text-[var(--muted)] mb-16 max-w-2xl mx-auto">
              Insights on web development, design trends, and AI innovations.
              Coming soon.
            </p>
            <div className="text-[var(--muted)]">
              <p>No posts yet. Check back soon for the latest articles.</p>
            </div>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
