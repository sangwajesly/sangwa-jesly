import Link from "next/link";
import { Palette, Monitor, Image, Bot } from "lucide-react";
import { projects, categoryGroups } from "@/content/projects";
import { siteConfig } from "@/lib/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

export default function Home() {
  const services = [
    { icon: "palette", title: "Brand Design", text: "From visual identity systems to marketing materials, I help businesses develop a clear and consistent visual presence across the places their customers see them." },
    { icon: "monitor", title: "Development", text: "I design and build responsive websites and web applications that make your business easier to understand, use and grow." },
    { icon: "bot", title: "AI Applications", text: "I build practical AI applications that help businesses work with information, serve customers and automate repetitive processes." },
  ];
  const steps = [
    { n: "01", title: "We talk", text: "You tell me about your business, your goals and what you\u2019re trying to solve." },
    { n: "02", title: "I make a plan", text: "I recommend the right approach, explain what\u2019s involved, and give you a clear timeline and cost before we begin." },
    { n: "03", title: "I design & build", text: "I turn the plan into the brand, product or system we agreed on, keeping you involved throughout the process." },
    { n: "04", title: "I deliver & support", text: "You receive the finished work and the files or access you need. I remain available for support when needed." },
  ];
  const marqueeItems = ["Brand Identity", "Digital Products", "Web Development", "AI Applications", "RAG Systems", "AI Chatbots", "Automation", "Marketing Design"];

  return (
    <>
      <Header />
      <main id="main">

        {/* 8.2 Hero */}
        <section id="hero" className="py-20 md:py-32 px-6 md:px-10">
          <div className="max-w-300 mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6 reveal">
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }} className="font-serif font-bold leading-[1.05] tracking-tight">
                I help businesses turn ideas into brands, digital products and software solutions.
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                I&apos;m Jesly, a Brand Designer and Developer. I help small businesses and startups build professional brands, modern web applications, and practical AI systems that solve real problems.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Brand Design</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Web Development</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">AI Applications</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Automation</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-bg px-8 py-4 text-center font-bold rounded-xl hover:opacity-90 transition-opacity min-h-12 flex items-center justify-center">Let&apos;s talk about your project</a>
                <Link href="#work" className="border border-border text-fg px-8 py-4 text-center font-medium rounded-xl hover:bg-surface transition-colors min-h-12 flex items-center justify-center">See my work</Link>
              </div>
              <p className="text-sm text-muted">Trusted to design and build for: {siteConfig.clients.join(" · ")}</p>
              {siteConfig.replyTime && <p className="text-sm text-muted">I usually reply within {siteConfig.replyTime}.</p>}
            </div>
            <div className="flex-1 max-w-xs md:max-w-sm reveal">
              <img src="/brand/portrait.jpg" alt="Sangwa Jesly, Brand Designer &amp; Developer" width={480} height={600} className="w-full rounded-2xl grayscale rotate-2 border-4 border-fg/10 hover:grayscale-0 hover:rotate-0 transition-all duration-500" />
            </div>
          </div>
        </section>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border py-4" aria-hidden="true">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className="mx-6 text-2xl md:text-3xl font-serif font-bold text-muted/30">{item} <span className="text-accent/40 mx-4">&bull;</span></span>
            ))}
          </div>
        </div>

        {/* 8.3 Selected work */}
        <section id="work" className="py-20 md:py-28 px-6 md:px-10 bg-surface/50">
          <div className="max-w-300 mx-auto reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-2">Selected work</h2>
            <p className="text-lg text-muted mb-16">A few projects I&apos;m proud of. Tap any project to see the details.</p>
            <div className="flex flex-col gap-20">
              {categoryGroups.map((group) => {
                const gp = projects.filter((p) => p.categoryGroup === group.id && p.published);
                if (!gp.length) return null;
                return (
                  <div key={group.id} className="reveal">
                    <div className="flex items-center gap-4 mb-8">
                      <h3 className="text-xl font-bold">{group.title}</h3>
                      <span className="font-mono text-xs text-muted bg-border px-2.5 py-1 rounded-lg">{gp.length}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 reveal-group">
                      {gp.map((project) => (
                        <Link href={"/work/" + project.slug} key={project.slug} className="group flex flex-col gap-4 rounded-2xl transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg">
                          <div className="aspect-4/3 bg-surface-raised rounded-2xl overflow-hidden border border-border group-hover:border-accent/40 transition-colors">
                            <img src={project.images.cover} alt={project.title} width={800} height={600} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
                          </div>
                          <div className="flex flex-col gap-1.5">
                            <div className="flex justify-between font-mono text-xs text-muted uppercase tracking-widest">
                              <span>{project.number} &middot; {project.category}</span>
                              {project.year && <span>{project.year}</span>}
                            </div>
                            <h4 className="text-lg font-bold font-serif">{project.title}</h4>
                            <p className="text-muted text-sm line-clamp-2">{project.summary}</p>
                            <span className="text-accent text-sm font-medium mt-2 inline-flex items-center gap-1">View project <span aria-hidden="true" className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span></span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 8.4 Services */}
        <section id="services" className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-300 mx-auto reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">How I can help</h2>
            <ol className="flex flex-col divide-y divide-border reveal-group">
              <li className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <span className="font-mono text-accent text-sm tracking-widest shrink-0 transition-transform duration-200 group-hover:translate-x-1">01</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Build a brand people can recognize and trust.</h3>
                  <p className="text-muted leading-relaxed max-w-xl">From visual identity systems to marketing materials, I help businesses develop a clear and consistent visual presence across the places their customers see them.</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-200"><Palette size={24} /></div>
              </li>
              <li className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <span className="font-mono text-accent text-sm tracking-widest shrink-0 transition-transform duration-200 group-hover:translate-x-1">02</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Turn your idea into a digital product.</h3>
                  <p className="text-muted leading-relaxed max-w-xl">I design and build responsive websites and web applications that make your business easier to understand, use and grow.</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-200"><Monitor size={24} /></div>
              </li>
              <li className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                <span className="font-mono text-accent text-sm tracking-widest shrink-0 transition-transform duration-200 group-hover:translate-x-1">03</span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Put AI to work on problems that actually matter.</h3>
                  <p className="text-muted leading-relaxed max-w-xl">I build practical AI applications that help businesses work with information, serve customers and automate repetitive processes.</p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-200"><Bot size={24} /></div>
              </li>
            </ol>
            <p className="text-muted text-sm mt-8 max-w-2xl">Need something specific or a combination of services? I can tailor a setup that fits your business goals and budget.</p>
          </div>
        </section>

        {/* 8.5 Process */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-surface/50">
          <div className="max-w-300 mx-auto reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">How we&apos;ll work together</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal-group">
              {steps.map((s) => (
                <div key={s.n} className="flex flex-col gap-4">
                  <span className="font-mono text-accent text-sm tracking-widest">{s.n}</span>
                  <h3 className="text-xl font-bold">{s.title}</h3>
                  <p className="text-muted leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8.6 About */}
        <section id="about" className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-300 mx-auto flex flex-col md:flex-row gap-12 items-start reveal">
            <div className="flex-1 max-w-xs">
              <img
                src="/brand/portrait.jpg"
                alt="Sangwa Jesly"
                width={400}
                height={500}
                className="w-full rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 border border-border"
              />
            </div>
            <div className="flex-1 max-w-xl">
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-6">Hi, I&apos;m Jesly</h2>
              <div className="text-muted text-lg leading-relaxed space-y-4">
                <p>I&apos;m a Brand Designer and Developer who enjoys turning ideas into things people can see, use and be proud of.</p>
                <p>I started in design and gradually moved deeper into software development and technology. Today, I bring those worlds together to help businesses build stronger brands, better digital products, and practical AI solutions.</p>
                <p>My work spans brand identity, web development, AI applications, RAG systems, AI chatbots and automation.</p>
                <p>I particularly enjoy projects where design and technology need to work together, where something needs to not only look good, but actually work.</p>
                <p>I work primarily with small businesses and startups that want to build something professional without unnecessary complexity.</p>
                <p>I&apos;m also completing my B.Tech in Software Engineering, with graduation expected in December 2026, while continuing to deepen my work in AI and software development.</p>
              </div>
              <p className="mt-8 text-xl font-serif font-bold text-fg">Good ideas deserve to be built well.</p>
              <div className="flex gap-4 mt-8">
                {siteConfig.github && <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors font-mono text-sm">GitHub &rarr;</a>}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section id="tools" className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-300 mx-auto">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Tools &amp; Technologies</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">How I build digital products</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-12 reveal-group">
              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Next.js', 'Python', 'FastAPI'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">AI Applications</h3>
                <div className="flex flex-wrap gap-2">
                  {['RAG Systems', 'Vector Databases', 'LLM Integration', 'AI Chatbots', 'AI Automation'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Data &amp; Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'Supabase', 'REST APIs', 'SQL'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Deployment &amp; Workflow</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'GitHub', 'Vercel', 'Netlify', 'Render', 'Railway'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {['Figma', 'Illustrator', 'Photoshop'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Video</h3>
                <div className="flex flex-wrap gap-2">
                  {['DaVinci Resolve', 'CapCut'].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">Build flow</p>
              <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-muted">
                <span className="bg-surface border border-border px-3 py-1.5 rounded-lg">React / Next.js</span>
                <span aria-hidden="true" className="text-accent">→</span>
                <span className="bg-surface border border-border px-3 py-1.5 rounded-lg">FastAPI / Python</span>
                <span aria-hidden="true" className="text-accent">→</span>
                <span className="bg-surface border border-border px-3 py-1.5 rounded-lg">PostgreSQL / Supabase</span>
                <span aria-hidden="true" className="text-accent">→</span>
                <span className="bg-surface border border-border px-3 py-1.5 rounded-lg">LLM / RAG / Vector Search</span>
                <span aria-hidden="true" className="text-accent">→</span>
                <span className="bg-surface border border-border px-3 py-1.5 rounded-lg">Vercel / deployment</span>
              </div>
            </div>
          </div>
        </section>

        {/* Worked with */}
        <section className="py-12 px-6 md:px-10 border-y border-border reveal">
          <div className="max-w-300 mx-auto">
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-6 text-center">Worked with</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {siteConfig.clients.map((c) => <span key={c} className="text-lg md:text-xl font-bold text-muted/80">{c}</span>)}
            </div>
          </div>
        </section>

        {/* 8.8 FAQ */}
        <section id="faq" className="py-20 md:py-28 px-6 md:px-10 reveal">
          <div className="max-w-3xl mx-auto">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">Frequently asked questions</h2>
            <FAQAccordion />
          </div>
        </section>

        {/* 8.9 Contact band */}
        <section id="contact" className="py-20 md:py-28 px-6 md:px-10 bg-accent text-bg">
          <div className="max-w-3xl mx-auto text-center reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-bold font-serif mb-4">Have an idea? Let&apos;s build it.</h2>
            <p className="text-xl mb-10 opacity-90">Whether you need a stronger brand, a website, a digital product, or a custom software solution, tell me what you&apos;re trying to achieve. I&apos;ll help you figure out the next step.</p>
            {siteConfig.availability && <div className="mb-8 inline-flex items-center gap-2 bg-bg/20 px-4 py-2 rounded-full text-sm font-medium"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bg opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-bg" /></span>{siteConfig.availability}</div>}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-bg text-accent px-8 py-4 text-lg font-bold rounded-xl hover:opacity-95 transition-opacity min-h-12">WhatsApp ({siteConfig.phone})</a>
              <a href={"mailto:" + siteConfig.email} className="border-2 border-bg text-bg px-8 py-4 text-lg font-bold rounded-xl hover:bg-bg hover:text-accent transition-colors min-h-12">Email Me</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}