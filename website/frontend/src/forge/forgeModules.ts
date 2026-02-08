export type ForgeModuleId = "wiki" | "gitea" | "metrics" | "logs" | "planning" | "support";

export type ForgeModule = {
  id: ForgeModuleId;
  label: string;
  route: string;     // "/forge/wiki"
  embedUrl: string;  // later: real URLs
  iframePolicy: "iframe" | "newtab" | "auto";
};

export const FORGE_MODULES: ForgeModule[] = [
  { id: "wiki", label: "Wiki", route: "/forge/wiki", embedUrl: "about:blank", iframePolicy: "auto" },
  { id: "gitea", label: "Gitea", route: "/forge/gitea", embedUrl: "about:blank", iframePolicy: "auto" },
  { id: "metrics", label: "Metrics", route: "/forge/metrics", embedUrl: "about:blank", iframePolicy: "auto" },
  { id: "logs", label: "Logs", route: "/forge/logs", embedUrl: "about:blank", iframePolicy: "auto" },
  { id: "planning", label: "Planning", route: "/forge/planning", embedUrl: "about:blank", iframePolicy: "auto" },
  { id: "support", label: "Support", route: "/forge/support", embedUrl: "about:blank", iframePolicy: "auto" },
];
