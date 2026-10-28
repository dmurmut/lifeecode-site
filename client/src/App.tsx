import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import BookOne from "./pages/BookOne";
import Books from "./pages/Books";
import Home from "./pages/Home";
import LifeeCodeLanding from "./pages/LifeeCodeLanding";
import Newsletter from "./pages/Newsletter";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import PublicationPage, {
  LegacyPublicationRoute,
} from "./pages/PublicationPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/books/what-should-remain-mine/" component={BookOne} />
      <Route path="/books/what-should-remain-mine" component={BookOne} />
      <Route path="/books/" component={Books} />
      <Route path="/books" component={Books} />
      <Route path="/about/" component={About} />
      <Route path="/about" component={About} />
      <Route path="/newsletter/" component={Newsletter} />
      <Route path="/newsletter" component={Newsletter} />
      <Route path="/privacy/" component={Privacy} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/lifeecode/" component={LifeeCodeLanding} />
      <Route path="/lifeecode" component={LifeeCodeLanding} />
      <Route path="/lifeecode/*" component={PublicationPage} />
      <Route path="/briefs" component={LegacyPublicationRoute} />
      <Route path="/briefs/" component={LegacyPublicationRoute} />
      <Route path="/briefs/:issue" component={LegacyPublicationRoute} />
      <Route path="/briefs/:issue/" component={LegacyPublicationRoute} />
      <Route path="/podcast" component={LegacyPublicationRoute} />
      <Route path="/podcast/" component={LegacyPublicationRoute} />
      <Route path="/hindi" component={LegacyPublicationRoute} />
      <Route path="/hindi/" component={LegacyPublicationRoute} />
      <Route path="/hindi/briefs/:issue" component={LegacyPublicationRoute} />
      <Route path="/hindi/briefs/:issue/" component={LegacyPublicationRoute} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
