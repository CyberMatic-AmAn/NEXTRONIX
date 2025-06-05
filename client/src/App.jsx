import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Achievements from "./pages/Achievements";
import Timeline from "./pages/Timeline";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import NotFound from "@/pages/not-found";
import Events from "./pages/Events"

function Router() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/achievements" component={Achievements} />
        <Route path="/events" component={Events}/>
        <Route path="/timeline" component={Timeline} />
        <Route path="/resources" component={Resources} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
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
