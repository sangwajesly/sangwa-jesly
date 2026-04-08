import { Layout } from "../../components/layout/Layout";
import { Section } from "../../components/layout/Section";
import { Grid } from "../../components/shared/Grid";

export const About = () => {
  return (
    <Layout>
      <Section className="pt-32 pb-16">
        <Grid>
          <div className="col-span-4 md:col-span-8">
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-12">
              About Sangwa
            </h1>
            <div className="space-y-8 text-lg leading-relaxed">
              <p>
                My journey into technology began in the vibrant city of Bamenda,
                Cameroon, where curiosity about how things work led me to
                computer science. What started as tinkering with code evolved
                into a deep passion for creating digital experiences that
                matter.
              </p>
              <p>
                As a Software Engineer, I build robust web applications that
                solve real problems. But I soon realized that great products
                need more than just functionality—they need to connect with
                people. This led me to marketing design, where I craft visual
                identities and strategies that tell compelling stories.
              </p>
              <p>
                The intersection of these disciplines fascinates me. I believe
                AI isn't just about automation; it's about augmenting human
                creativity. My work in AI automations focuses on building
                intelligent systems that free up time for what humans do best:
                innovate and create.
              </p>
              <p>
                When I'm not at my desk, you'll find me exploring emerging
                technologies, contributing to open-source projects, or hiking
                the hills around Bamenda. I believe in continuous learning and
                the power of collaboration to drive meaningful change.
              </p>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4">
            <div className="space-y-8">
              <div>
                <h3 className="font-bold uppercase mb-4">Expertise</h3>
                <ul className="space-y-2 text-[var(--muted)]">
                  <li>Full-Stack Web Development</li>
                  <li>Brand Identity Design</li>
                  <li>UI/UX Design</li>
                  <li>AI & Machine Learning</li>
                  <li>Digital Marketing Strategy</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold uppercase mb-4">
                  Tools & Technologies
                </h3>
                <ul className="space-y-2 text-[var(--muted)]">
                  <li>React, Next.js, Node.js</li>
                  <li>Python, TensorFlow</li>
                  <li>Figma, Adobe Creative Suite</li>
                  <li>AWS, Docker</li>
                  <li>Git, CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </Grid>
      </Section>
    </Layout>
  );
};
