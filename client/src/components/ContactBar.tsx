import { Phone, Mail, Clock } from "lucide-react";

const ContactBar = () => {
  return (
    <div className="contact-bar py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Phone className="h-5 w-5 mr-2" />
            <span className="uppercase text-sm font-medium">CALL US</span>
            <a href="tel:943-227-5246" className="ml-2 text-sm">
              Tel: 943-227-5246
            </a>
          </div>
          
          <div className="flex items-center mb-4 md:mb-0">
            <Mail className="h-5 w-5 mr-2" />
            <span className="uppercase text-sm font-medium">EMAIL US</span>
            <a href="mailto:joe@alwaysmovingsomething.com" className="ml-2 text-sm">
              joe@alwaysmovingsomething.com
            </a>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span className="uppercase text-sm font-medium">OPENING HOURS</span>
            <span className="ml-2 text-sm">Mon - Fri: 8am - 5pm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
