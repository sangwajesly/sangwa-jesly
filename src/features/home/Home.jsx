import { Layout } from "../../components/layout/Layout";
import { SEO } from "../../components/shared/SEO";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { SelectedWorks } from "./SelectedWorks";
import { TestimonialsList } from "./Testimonials";
import { Newsletter } from "./Newsletter";

export const Home = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <Services />
      <SelectedWorks />
      <TestimonialsList />
      <Newsletter />
    </Layout>
  );
};
