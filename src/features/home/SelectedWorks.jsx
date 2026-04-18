import { ProjectTeaser } from "./ProjectTeaser";
import { PROJECTS } from "../../data/projects";

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
