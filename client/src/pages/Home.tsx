import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>AMS Transportation - Your Trusted Logistics Partner</title>
        <meta name="description" content="AMS Transportation provides reliable logistics and transportation services including flatbed transport, warehouse relocation, freight management, and storage solutions." />
      </Helmet>
      
      <Hero />
      <ContactBar />
      <ServiceSection />
      <AboutSection />
    </>
  );
};

export default Home;
