import Layout from "../components/layout/Layout";
import Approach from "../components/sections/Approach";
import CapabilityAreas from "../components/sections/CapabilityAreas";
import ContactCta from "../components/sections/ContactCta";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Hero from "../components/sections/Hero";
import OperationalExperience from "../components/sections/OperationalExperience";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <CapabilityAreas />
      <FeaturedProjects />
      <Approach />
      <OperationalExperience />
      <ContactCta />
    </Layout>
  );
};

export default Home;
