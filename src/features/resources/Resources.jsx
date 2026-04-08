import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

const RESOURCES = [
  {
    title: "Design System Starter Kit",
    type: "Download",
    description:
      "A comprehensive Figma file with components, patterns, and guidelines for building consistent user interfaces.",
    link: "#",
  },
  {
    title: "Web Development Checklist",
    type: "Tool",
    description:
      "An interactive checklist to ensure your web projects meet modern standards and best practices.",
    link: "#",
  },
  {
    title: "AI Automation Templates",
    type: "Template",
    description:
      "Ready-to-use templates for common automation workflows in marketing and business processes.",
    link: "#",
  },
];

export const Resources = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
              Resources
            </h1>
            <p className="text-lg text-[var(--muted)] mb-16 max-w-2xl">
              Tools, templates, and insights to help you build better digital
              experiences. Free resources for developers and designers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {RESOURCES.map((resource, index) => (
                <div
                  key={index}
                  className="p-6 border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
                >
                  <div className="mb-4">
                    <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[var(--accent)] transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                    {resource.description}
                  </p>
                  <a
                    href={resource.link}
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-[var(--accent)] transition-colors"
                  >
                    Access Resource
                    <span className="w-4 h-[1px] bg-current transition-all duration-300 group-hover:w-8" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
