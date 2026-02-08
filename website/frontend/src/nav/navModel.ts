export type NavLink = {
  label: string;
  to: string;
};

export type NavSection = {
  id: "about" | "policies" | "news" | "game" | "community";
  label: string;
  links: NavLink[];
};

export const NAV_SECTIONS: NavSection[] = [
  {
    id: "about",
    label: "About",
    links: [
      { label: "Axiom Overview", to: "/about/overview" },
      { label: "Roadmap", to: "/about/roadmap" },
      { label: "Staff", to: "/about/staff" },
      { label: "Senate", to: "/about/senate" },
      { label: "Volunteering", to: "/about/volunteering" },
    ],
  },
  {
    id: "policies",
    label: "Policies",
    links: [
      { label: "Privacy Policy", to: "/policies/privacy" },
      { label: "Terms of Service", to: "/policies/terms" },
      { label: "Legal Notice", to: "/policies/legal" },
      { label: "Data Policies", to: "/policies/data" },
      { label: "Account Policies", to: "/policies/account" },
      { label: "Code of Conduct", to: "/policies/conduct" },
      { label: "Rehabilitation System", to: "/policies/rehabilitation" },
    ],
  },
  {
    id: "news",
    label: "News",
    links: [
      { label: "Patch Notes", to: "/news/patch-notes" },
      { label: "Community", to: "/news/community" },
      { label: "Development", to: "/news/development" },
    ],
  },
  {
    id: "game",
    label: "Game",
    links: [
      { label: "Play", to: "/game/play" },
      { label: "Wiki", to: "/game/wiki" },
      { label: "Metrics", to: "/game/metrics" }, // placeholder
      { label: "Skill Calculator", to: "/game/tools/skill-calculator" },
      { label: "Crafters Corner", to: "/game/tools/crafters-corner" },
      { label: "Spacers Den", to: "/game/tools/spacers-den" },
    ],
  },
  {
    id: "community",
    label: "Community",
    links: [
      { label: "Senate Proposals", to: "/community/senate/proposals" },
      { label: "Senate Discussion", to: "/community/senate/discussion" },
      { label: "Discord", to: "/community/discord" },
    ],
  },
];
