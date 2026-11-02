import {
  createElement,
  lazy,
  type ComponentType,
  type LazyExoticComponent,
} from "react";
import BriefTemplate from "@/components/lifeecode/BriefTemplate";
import { allPages, briefByIssue } from "./pages";

const modules = import.meta.glob<{ default: ComponentType }>("./*.tsx");
export const publicationPages: Record<
  string,
  LazyExoticComponent<ComponentType>
> = {};
for (const page of allPages) {
  if (page.module.startsWith("brief:")) {
    const brief = briefByIssue[Number(page.module.slice(6))];
    publicationPages[page.path] = lazy(async () => ({
      default: () => createElement(BriefTemplate, { brief }),
    }));
    continue;
  }
  const loader = modules[`./${page.module}.tsx`];
  if (!loader)
    throw new Error(`Missing LifeeCode content module for ${page.path}`);
  publicationPages[page.path] = lazy(loader);
}
