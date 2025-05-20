import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Contact from "@/pages/Contact";
import ServiceLanding from "@/pages/landing/ServiceLanding";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Router() {
  const [location] = useLocation();
  
  // Check if we're on a landing page
  const isLandingPage = location.startsWith('/landing/');
  
  // If we're on a landing page, don't show the main navigation wrapper
  if (isLandingPage) {
    return (
      <Switch>
        <Route path="/landing/services/:serviceId" component={ServiceLanding} />
        <Route component={NotFound} />
      </Switch>
    );
  }
  
  // Regular site with header and footer
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
