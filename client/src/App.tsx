/* Clinical Editorial Garden: routes preserve the live LifeeCode information architecture across its five public sections. */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Briefs from "./pages/Briefs";
import Podcast from "./pages/Podcast";
import Hindi from "./pages/Hindi";
import HindiBrief8 from "./pages/HindiBrief8";
import HindiBrief9 from "./pages/HindiBrief9";
import HindiBrief11 from "./pages/HindiBrief11";
import About from "./pages/About";
import BriefDetail from "./pages/BriefDetail";

function Router() { return <Switch><Route path="/" component={Home} /><Route path="/briefs" component={Briefs} /><Route path="/briefs/:issue" component={BriefDetail} /><Route path="/podcast" component={Podcast} /><Route path="/hindi/briefs/8" component={HindiBrief8} /><Route path="/hindi/briefs/9" component={HindiBrief9} /><Route path="/hindi/briefs/11" component={HindiBrief11} /><Route path="/hindi" component={Hindi} /><Route path="/about" component={About} /><Route component={Home} /></Switch>; }

export default function App() { return <ErrorBoundary><ThemeProvider defaultTheme="light"><TooltipProvider><Router /><Toaster /></TooltipProvider></ThemeProvider></ErrorBoundary>; }
