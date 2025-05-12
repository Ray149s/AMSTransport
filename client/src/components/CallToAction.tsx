import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Your Logistics?</h2>
          <p className="text-lg mb-8 text-gray-300">
            Contact us today to discuss how AMS Transportation can help streamline your shipping and logistics operations.
            Our team of experts is ready to provide tailored solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button 
                variant="ams" 
                size="lg" 
                className="font-bold text-lg px-8 py-6 rounded-md"
              >
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="tel:943-227-5246">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-bold text-lg px-8 py-6 rounded-md border-white text-white bg-transparent hover:bg-white hover:text-gray-900"
              >
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;