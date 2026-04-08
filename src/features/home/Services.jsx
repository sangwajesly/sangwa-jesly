import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

const EXPERTISE = [
  {
    title: "Web Development",
    description:
      "Building robust, scalable web applications with modern technologies. From concept to deployment, ensuring performance and user experience.",
  },
  {
    title: "Brand & Marketing Design",
    description:
      "Crafting compelling visual identities and marketing materials that resonate. Strategic design that communicates and converts.",
  },
  {
    title: "AI Automations",
    description:
      "Developing intelligent systems that streamline processes. Leveraging AI to automate workflows and enhance decision-making.",
  },
];

export const Services = () => {
  return (
    <Section className="py-24">
      <Grid>
        <div className="col-span-4 md:col-span-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-16">
            Core Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {EXPERTISE.map((item, index) => (
              <div key={index} className="group">
                <div className="mb-6">
                  <span className="text-[var(--accent)] font-mono text-xs uppercase tracking-wider">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Grid>
    </Section>
  );
};
