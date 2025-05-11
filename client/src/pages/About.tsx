import { Helmet } from "react-helmet";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AMS Transportation</title>
        <meta name="description" content="Learn about AMS Transportation's history, mission, and commitment to excellence in logistics and shipping services since 2006." />
      </Helmet>
      
      <Hero showContactButton={false} />
      <ContactBar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">About AMS Transportation</h1>
            
            <div className="prose prose-lg">
              <p>
                Founded in 2006, AMS Transportation has grown to become a leader in the transportation and logistics industry. Our dedication to quality service, reliability, and customer satisfaction has earned us a reputation as a trusted partner for businesses of all sizes.
              </p>
              
              <h2>Our Mission</h2>
              <p>
                At AMS Transportation, our mission is to provide efficient, reliable, and cost-effective logistics solutions that help our clients succeed. We believe in building long-term relationships with our customers by understanding their unique needs and delivering exceptional service.
              </p>
              
              <h2>Our Experience</h2>
              <p>
                With over 15 years of experience in the transportation industry, we have developed a deep understanding of the complexities involved in modern logistics. Our team of professionals brings extensive knowledge and expertise to every project, ensuring smooth and successful operations.
              </p>
              
              <h2>Our Approach</h2>
              <p>
                We take a customer-centric approach to every service we provide. By listening to our clients' needs and concerns, we can tailor our solutions to meet their specific requirements. We are committed to transparency, communication, and building trust with every interaction.
              </p>
              
              <h2>Our Commitment to Quality</h2>
              <p>
                Quality is at the heart of everything we do. From our modern fleet of vehicles to our state-of-the-art storage facilities, we invest in the best resources to ensure we deliver superior service. Our commitment to excellence drives us to continuously improve and evolve our operations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
