import { ProjectTeaser } from "./ProjectTeaser";

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
  },
];

export const SelectedWorks = () => {
  return (
    <div id="projects" className="bg-[var(--bg)]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 pt-32 pb-16">
        <h3 className="font-mono text-xs uppercase tracking-[0.4em] text-[var(--muted)] border-b border-[var(--border)] pb-8">
          Selected Projects
        </h3>
      </div>

      {PROJECTS.map((project, index) => (
        <ProjectTeaser key={project.slug} project={project} index={index} />
      ))}
    </div>
  );
};
