import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import LifeeCodeLayout from "./components/LifeeCodeLayout";
import { ThemeProvider } from "./contexts/ThemeContext";
import type { ComponentType } from "react";

const content = import.meta.glob<{ default: ComponentType }>(
  "./content/lifeecode/*.tsx",
  { eager: true }
);

export function renderPath(path: string, module?: string): string {
  if (module) {
    const Content = content[`./content/lifeecode/${module}.tsx`]?.default;
    if (!Content)
      throw new Error(`Missing published content module: ${module}`);
    return renderToString(
      <Router ssrPath={path}>
        <ThemeProvider defaultTheme="light">
          <LifeeCodeLayout>
            <Content />
          </LifeeCodeLayout>
        </ThemeProvider>
      </Router>
    );
  }
  return renderToString(
    <Router ssrPath={path}>
      <App />
    </Router>
  );
}
