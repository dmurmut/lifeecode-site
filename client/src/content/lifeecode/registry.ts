import { lazy, type ComponentType, type LazyExoticComponent } from "react";
import manifest from "./manifest.json";

const modules = import.meta.glob<{ default: ComponentType }>("./*.tsx");
export const publicationPages: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {};
for (const page of manifest) {
  const loader = modules[`./${page.module}.tsx`];
  if (!loader)
    throw new Error(`Missing LifeeCode content module for ${page.path}`);
  publicationPages[page.path] = lazy(loader);
}
