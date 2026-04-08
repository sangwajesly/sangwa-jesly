import { Grid } from "../../components/shared/Grid";

export const ProjectTeaser = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`group relative py-20 md:py-40 border-b border-[var(--border)] overflow-hidden`}>
      <Grid className="items-center">
        {/* Project Visual */}
        <div className={`col-span-4 md:col-span-7 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
          <div className="relative aspect-[16/10] bg-[var(--border)] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out cursor-pointer">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute top-8 left-8 p-4 bg-[var(--bg)]/90 backdrop-blur-sm border border-[var(--border)]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                {project.category} / {project.year}
              </span>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className={`col-span-4 md:col-span-4 ${isEven ? 'md:order-2 md:col-start-9' : 'md:order-1'}`}>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--muted)] mb-4 block">
            0{index + 1} — CASE STUDY
          </span>
          
          <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-[var(--accent)] transition-colors">
            {project.title}
          </h2>
          
          <p className="text-lg md:text-xl text-[var(--muted)] leading-tight mb-10 max-w-sm">
            {project.description}
          </p>

          <a href={`/projects/${project.slug}`} className="inline-flex items-center gap-4 group/btn">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Explore Narrative</span>
            <div className="w-12 h-[1px] bg-[var(--muted)] group-hover/btn:w-20 group-hover/btn:bg-[var(--accent)] transition-all duration-500" />
          </a>
        </div>
      </Grid>
      
      <span className="absolute -bottom-10 -right-20 text-[20vw] font-bold text-white/5 uppercase select-none pointer-events-none -z-10 group-hover:text-[var(--accent)]/10 transition-colors duration-700">
        {project.title}
      </span>
    </div>
  );
};
