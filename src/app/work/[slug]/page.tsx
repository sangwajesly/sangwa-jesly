import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, getRelatedProjects } from "@/content/projects";
import { siteConfig } from "@/lib/config";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title + " | Sangwa Jesly",
      description: project.summary,
      images: [{ url: project.images.cover, width: 1600, height: 1200 }],
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const related = getRelatedProjects(project);
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;
  const crossLink = project.slug === "bongbine-brand-identity" ? "This company also has a website" : project.slug === "bongbine-website" ? "This company also has a brand identity" : null;

  return (
    <>
      <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
          <Link href="/#work" className="text-muted hover:text-fg transition-colors font-medium inline-flex items-center gap-2"><span aria-hidden="true">&larr;</span> Back to work</Link>
          <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-bg px-5 py-2.5 font-medium rounded-xl hover:opacity-90 transition-opacity">Let&apos;s talk</a>
        </div>
      </header>

      <main id="main">
        <article>
          <div className="max-w-3xl mx-auto px-6 md:px-10 mt-16 md:mt-24 mb-12 text-center reveal">
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }} className="font-serif font-bold mb-6 tracking-tight">{project.title}</h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">{project.summary}</p>
          </div>

          <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-16 reveal">
            <div className="aspect-video bg-surface-raised rounded-2xl overflow-hidden border border-border">
              <img src={project.images.hero || project.images.cover} alt={project.title} width={2400} height={1350} className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="max-w-3xl mx-auto px-6 md:px-10 mb-16 reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-border py-8 font-mono text-sm">
              <div><div className="text-muted uppercase text-xs tracking-widest mb-1">Client</div><div className="font-medium">{project.client}</div></div>
              <div><div className="text-muted uppercase text-xs tracking-widest mb-1">My role</div><div className="font-medium">{project.role}</div></div>
              {project.year && <div><div className="text-muted uppercase text-xs tracking-widest mb-1">Year</div><div className="font-medium">{project.year}</div></div>}
              {project.liveUrl && <div><div className="text-muted uppercase text-xs tracking-widest mb-1">Live site</div><a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-medium inline-flex items-center gap-1">Visit <span aria-hidden="true">&rarr;</span></a></div>}
            </div>
          </div>

          {project.about && <div className="max-w-[680px] mx-auto px-6 md:px-10 mb-12 reveal"><h2 className="text-2xl font-serif font-bold mb-4">About this project</h2><p className="text-muted text-lg leading-relaxed">{project.about}</p></div>}
          {project.need && <div className="max-w-[680px] mx-auto px-6 md:px-10 mb-12 reveal"><h2 className="text-2xl font-serif font-bold mb-4">What they needed</h2><p className="text-muted text-lg leading-relaxed">{project.need}</p></div>}
          {project.madeList && project.madeList.length > 0 && <div className="max-w-[680px] mx-auto px-6 md:px-10 mb-12 reveal"><h2 className="text-2xl font-serif font-bold mb-4">What I made</h2><ul className="list-disc list-inside text-muted text-lg leading-relaxed space-y-2">{project.madeList.map((item, i) => <li key={i}>{item}</li>)}</ul></div>}
          {project.result && <div className="max-w-[680px] mx-auto px-6 md:px-10 mb-16 reveal"><h2 className="text-2xl font-serif font-bold mb-4">The result</h2><p className="text-muted text-lg leading-relaxed">{project.result}</p></div>}

          {project.images.gallery.length > 0 && (
            <div className="max-w-[1200px] mx-auto px-6 md:px-10 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal-group">
                {project.images.gallery.map((img, i) => (
                  <div key={i} className={"rounded-2xl overflow-hidden border border-border bg-surface-raised transition-all duration-300 hover:border-accent/40" + (i % 3 === 0 ? " md:col-span-2" : "")}>
                    <img src={img.src} alt={img.alt} width={1600} height={1000} loading="lazy" className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500 ease-out" />
                    {img.caption && <p className="px-4 py-3 text-sm text-muted">{img.caption}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="max-w-3xl mx-auto px-6 md:px-10 mb-20 reveal">
            <h2 className="text-2xl font-serif font-bold mb-8">More projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {prev && <Link href={"/work/" + prev.slug} className="group border border-border rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-0.5 transition-all"><p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">&larr; Previous</p><p className="font-bold font-serif group-hover:text-accent transition-colors">{prev.title}</p></Link>}
              {next && <Link href={"/work/" + next.slug} className="group border border-border rounded-2xl p-6 hover:border-accent/40 hover:-translate-y-0.5 transition-all text-right"><p className="font-mono text-xs text-muted uppercase tracking-widest mb-2">Next &rarr;</p><p className="font-bold font-serif group-hover:text-accent transition-colors">{next.title}</p></Link>}
            </div>
            {related.length > 0 && <div className="mt-6 flex flex-col gap-3">{related.map((r) => <Link key={r.slug} href={"/work/" + r.slug} className="text-accent hover:underline font-medium inline-flex items-center gap-2">{crossLink || "Related: " + r.title} <span aria-hidden="true">&rarr;</span></Link>)}</div>}
          </div>
        </article>

        <section className="py-20 md:py-28 px-6 md:px-10 bg-accent text-bg">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-bold font-serif mb-4">Want something like this for your business? Let&apos;s talk.</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-bg text-accent px-8 py-4 text-lg font-bold rounded-xl hover:opacity-95 transition-opacity min-h-[48px]">WhatsApp</a>
              <a href={"mailto:" + siteConfig.email} className="border-2 border-bg text-bg px-8 py-4 text-lg font-bold rounded-xl hover:bg-bg hover:text-accent transition-colors min-h-[48px]">Email</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}