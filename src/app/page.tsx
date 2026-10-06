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
    { icon: "palette", title: "Brand identity", text: "A distinctive logo and clear visual system so your business looks professional and consistent everywhere: signage, social media and documents." },
    { icon: "monitor", title: "Websites & AI Web Apps", text: "Fast, responsive web applications built for performance. From clean websites to interactive apps enhanced with custom AI search and assistants." },
    { icon: "bot", title: "Business Automations & AI Integration", text: "Practical systems that eliminate repetitive work: automated customer replies, intelligent document handling, and AI workflows tailored to your daily operations." },
    { icon: "image", title: "Event & social media designs", text: "Flyers, banners, badges and promotional graphics that grab attention and turn viewers into customers." },
  ];
  const steps = [
    { n: "01", title: "We talk", text: "You tell me about your business and what you need." },
    { n: "02", title: "I make a plan", text: "I explain what I\u2019ll make, how long it will take and what it will cost, before we start." },
    { n: "03", title: "I design and build", text: "You see progress along the way and can ask for changes." },
    { n: "04", title: "I deliver and support", text: "You get all your final files. I stay available if you need help afterwards." },
  ];
  const marqueeItems = ["Brand design", "Websites", "AI Web Apps", "Automations", "Event branding", "Flyers", "Social media", "Logos"];

  return (
    <>
      <Header />
      <main id="main">

        {/* 8.2 Hero */}
        <section id="hero" className="py-20 md:py-32 px-6 md:px-10">
          <div className="max-w-[1200px] mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
            <div className="flex-1 flex flex-col gap-6 reveal">
              <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }} className="font-serif font-bold leading-[1.05] tracking-tight">
                I design brands, build web &amp; AI apps, and create automations for businesses.
              </h1>
              <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
                I&apos;m Jesly, a designer and software engineer. I help small businesses and startups build polished brands, modern web applications, and practical automations that save time.
              </p>
              <div className="flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest">
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Brand design</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Web &amp; AI Apps</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Workflow Automation</span>
                <span className="bg-surface px-3 py-1.5 rounded-lg border border-border">Graphic design</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-accent text-bg px-8 py-4 text-center font-bold rounded-xl hover:opacity-90 transition-opacity min-h-[48px] flex items-center justify-center">Chat with me on WhatsApp</a>
                <Link href="#work" className="border border-border text-fg px-8 py-4 text-center font-medium rounded-xl hover:bg-surface transition-colors min-h-[48px] flex items-center justify-center">See my work</Link>
              </div>
              <p className="text-sm text-muted">I&apos;ve worked with {siteConfig.clients.join(", ")}.</p>
              {siteConfig.replyTime && <p className="text-sm text-muted">I usually reply within <strong>{siteConfig.replyTime}</strong>.</p>}
            </div>
            <div className="flex-1 max-w-xs md:max-w-sm reveal">
              <img src="/brand/portrait.jpg" alt="Sangwa Jesly, designer and web developer" width={480} height={600} className="w-full rounded-2xl grayscale rotate-2 border-4 border-fg/10 hover:grayscale-0 hover:rotate-0 transition-all duration-500" />
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
          <div className="max-w-[1200px] mx-auto reveal">
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
                          <div className="aspect-[4/3] bg-surface-raised rounded-2xl overflow-hidden border border-border group-hover:border-accent/40 transition-colors">
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
          <div className="max-w-[1200px] mx-auto reveal">
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">How I can help</h2>
            <ol className="flex flex-col divide-y divide-border reveal-group">
              {services.map((s, i) => (
                <li key={s.title} className="py-8 flex flex-col md:flex-row md:items-start gap-4 md:gap-8 group">
                  <span className="font-mono text-accent text-sm tracking-widest shrink-0 transition-transform duration-200 group-hover:translate-x-1">0{i + 1}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                    <p className="text-muted leading-relaxed max-w-xl">{s.text}</p>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {s.icon === "palette" && <Palette size={24} />}
                    {s.icon === "monitor" && <Monitor size={24} />}
                    {s.icon === "bot" && <Bot size={24} />}
                    {s.icon === "image" && <Image size={24} />}
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-muted text-sm mt-8 max-w-2xl">Need something specific or a combination of services? I can tailor a setup that fits your business goals and budget.</p>
          </div>
        </section>

        {/* 8.5 Process */}
        <section className="py-20 md:py-28 px-6 md:px-10 bg-surface/50">
          <div className="max-w-[1200px] mx-auto reveal">
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
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row gap-12 items-start reveal">
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
                <p>I&apos;m a designer and web developer with a B.Tech in Software Engineering. I love turning ideas into things people can see, use and feel proud of.</p>
                <p>I enjoy crafting brand identities, designing event graphics, and building websites that feel effortless to use. I thrive on making the work match the ambition behind it.</p>
                <p>I work with small businesses, startups and community organisers everywhere. I help them look as professional as the big brands, without the big-brand budget.</p>
              </div>
              <div className="flex gap-4 mt-8">
                {siteConfig.github && <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent transition-colors font-mono text-sm">GitHub &rarr;</a>}
              </div>
            </div>
          </div>
        </section>

        {/* Tools & Technologies */}
        <section id="tools" className="py-20 md:py-28 px-6 md:px-10">
          <div className="max-w-[1200px] mx-auto">
            <div className="reveal">
              <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">Tools &amp; Technologies</p>
              <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-serif font-bold mb-12">What I work with</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 reveal-group">
              {/* Development */}
              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Development</h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Next.js", "JavaScript", "Python", "FastAPI", "RAGs", "Vector DBs", "AI Integration", "System Design"].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* Design */}
              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Design</h3>
                <div className="flex flex-wrap gap-2">
                  {["Figma", "Photoshop", "Illustrator"].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>

              {/* Video */}
              <div className="bg-surface/40 p-6 rounded-2xl border border-border/80 hover:border-accent/30 transition-colors">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-5">Video</h3>
                <div className="flex flex-wrap gap-2">
                  {["DaVinci Resolve", "CapCut", "Filmora"].map((t) => (
                    <span key={t} className="bg-surface border border-border px-3 py-1.5 rounded-lg text-sm hover:border-accent/40 transition-colors">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8.7 Proof — Worked with */}
        <section className="py-12 px-6 md:px-10 border-y border-border reveal">
          <div className="max-w-[1200px] mx-auto">
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
            <h2 style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }} className="font-bold font-serif mb-4">Have a project in mind? Let&apos;s talk.</h2>
            <p className="text-xl mb-10 opacity-90">Tell me what you need. I&apos;ll reply with the next steps.</p>
            {siteConfig.availability && <div className="mb-8 inline-flex items-center gap-2 bg-bg/20 px-4 py-2 rounded-full text-sm font-medium"><span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-bg opacity-60" /><span className="relative inline-flex h-2 w-2 rounded-full bg-bg" /></span>{siteConfig.availability}</div>}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={siteConfig.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-bg text-accent px-8 py-4 text-lg font-bold rounded-xl hover:opacity-95 transition-opacity min-h-[48px]">WhatsApp ({siteConfig.phone})</a>
              <a href={"mailto:" + siteConfig.email} className="border-2 border-bg text-bg px-8 py-4 text-lg font-bold rounded-xl hover:bg-bg hover:text-accent transition-colors min-h-[48px]">Email Me</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}