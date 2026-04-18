import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";
import { PROJECTS } from "../../data/projects";
import { ArrowLeft } from "lucide-react";

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <Layout>
        <Section className="pt-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Project not found</h1>
            <Link to="/projects" className="text-[var(--accent)] uppercase tracking-widest text-sm">
              Back to Projects
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-12">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-mono uppercase tracking-widest text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-12"
            >
              <ArrowLeft size={16} /> Back to Projects
            </Link>
            
            <div className="mb-4">
              <span className="font-mono text-sm uppercase tracking-wider text-[var(--accent)]">
                {project.category} / {project.year}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-12 leading-[0.9]">
              {project.title}
            </h1>
          </div>
        </Grid>

        <div className="mt-12 aspect-[21/9] w-full bg-[var(--border)] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <Grid className="mt-20">
          <div className="col-span-4 md:col-span-4 space-y-8">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Client</h4>
              <p className="text-lg font-medium">{project.client}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Role</h4>
              <p className="text-lg font-medium">{project.role}</p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-2">Services</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-sm">{tag}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-4 md:col-span-7 md:col-start-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Overview</h3>
            <p className="text-xl text-[var(--muted)] leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-lg leading-relaxed">
              {project.fullDescription}
            </p>
            
            <div className="mt-12 p-8 border border-[var(--border)] bg-[var(--border)]/10">
              <h4 className="font-mono text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Outcome</h4>
              <p className="text-2xl font-bold italic">"{project.outcome}"</p>
            </div>
          </div>
        </Grid>
      </Section>

      {/* Gallery Section */}
      {project.gallery && (
        <Section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] bg-[var(--border)] overflow-hidden">
                <img
                  src={img}
                  alt={`${project.title} gallery ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Next Project Navigation */}
      <Section className="py-20 border-t border-[var(--border)]">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--muted)] mb-4">Next Project</p>
          {(() => {
            const currentIndex = PROJECTS.findIndex(p => p.slug === slug);
            const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
            return (
              <Link
                to={`/projects/${nextProject.slug}`}
                className="group inline-block"
              >
                <h2 className="text-4xl md:text-6xl font-bold group-hover:text-[var(--accent)] transition-colors mb-4">
                  {nextProject.title}
                </h2>
                <div className="flex justify-center items-center gap-4 text-[var(--muted)] group-hover:text-[var(--fg)] transition-colors">
                  <span className="font-mono text-sm uppercase tracking-widest">View Case Study</span>
                  <div className="w-12 h-[1px] bg-current" />
                </div>
              </Link>
            );
          })()}
        </div>
      </Section>
    </Layout>
  );
};
