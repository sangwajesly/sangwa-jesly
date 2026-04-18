import { Layout } from "../../components/layout/Layout";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { SelectedWorks } from "./SelectedWorks";
import { TestimonialsList } from "./Testimonials";
import { Newsletter } from "./Newsletter";

export const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <SelectedWorks />
      <TestimonialsList />
      <Newsletter />
    </Layout>
  );
};
