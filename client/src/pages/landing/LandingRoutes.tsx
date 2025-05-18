import React from 'react';
import { Switch, Route, useLocation } from "wouter";
import LandingHome from './LandingHome';
import FlatbedService from './FlatbedService';
import NotFound from '@/pages/not-found';

/**
 * This component handles all landing page routes and ensures they 
 * don't use the main site header/footer
 */
const LandingRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/landing/services" component={LandingHome} />
      <Route path="/landing/services/flatbed" component={FlatbedService} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default LandingRoutes;