import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

const PROJECTS = [
  {
    title: "E-Commerce Accelerator",
    slug: "ecommerce-accelerator",
    category: "Web Development",
    year: "2024",
    description:
      "Transformed a local retailer's operations with a custom e-commerce platform, boosting online sales by 150% through optimized user experience and automated inventory management.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    title: "Brand Identity Redesign",
    slug: "brand-identity-redesign",
    category: "Brand Design",
    year: "2023",
    description:
      "Revitalized a tech startup's visual identity, creating a cohesive brand system that improved brand recognition and customer engagement across digital platforms.",
    image:
      "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=1200",
    tags: ["Logo Design", "Brand Guidelines", "Print Design"],
  },
  {
    title: "Marketing Automation Suite",
    slug: "marketing-automation-suite",
    category: "AI Automations",
    year: "2024",
    description:
      "Developed an AI-powered marketing automation tool that streamlined campaign management, reducing manual effort by 70% and increasing conversion rates through intelligent personalization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["Python", "Machine Learning", "API Integration", "Dashboard"],
  },
];

export const Projects = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-16">
              Selected Projects
            </h1>
            <div className="space-y-20">
              {PROJECTS.map((project, index) => (
                <div
                  key={project.slug}
                  className="group border-b border-[var(--border)] pb-20"
                >
                  <Grid className="items-center">
                    <div className="col-span-4 md:col-span-6">
                      <div className="relative aspect-[4/3] bg-[var(--border)] overflow-hidden mb-8 md:mb-0">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </div>
                    <div className="col-span-4 md:col-span-5 md:col-start-8">
                      <div className="mb-4">
                        <span className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                          {project.category} / {project.year}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                        {project.title}
                      </h2>
                      <p className="text-[var(--muted)] leading-relaxed mb-6">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-[var(--border)] text-xs uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider hover:text-[var(--accent)] transition-colors"
                      >
                        View Case Study
                        <span className="w-6 h-[1px] bg-current transition-all duration-300 group-hover:w-12" />
                      </a>
                    </div>
                  </Grid>
                </div>
              ))}
            </div>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
