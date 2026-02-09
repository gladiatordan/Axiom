import { createBrowserRouter } from "react-router-dom";
import AppShell from "../layout/AppShell";

import Home from "../pages/Home";
import SupportPortal from "../pages/Support/SupportPortal";
import ForgePortal from "../pages/Forge/ForgePortal";

// Profile
import ProfileRegister from "../pages/Profile/Register";

// About
import AboutOverview from "../pages/About/Overview";
import AboutRoadmap from "../pages/About/Roadmap";
import AboutStaff from "../pages/About/Staff";
import AboutSenate from "../pages/About/Senate";
import AboutVolunteering from "../pages/About/Volunteering";

// Policies
import PoliciesPrivacy from "../pages/Policies/Privacy";
import PoliciesTerms from "../pages/Policies/Terms";
import PoliciesAccount from "../pages/Policies/Account";
import PoliciesConduct from "../pages/Policies/Conduct";
import PoliciesData from "../pages/Policies/Data";
import PoliciesLegal from "../pages/Policies/Legal";
import PoliciesRehabilitation from "../pages/Policies/Rehabilitation";

// News
import NewsCommunity from "../pages/News/Community";
import NewsDevelopment from "../pages/News/Development";
import NewsPatchNotes from "../pages/News/PatchNotes";

// Game
import GamePlay from "../pages/Game/Play";
import GameMetrics from "../pages/Game/Metrics";
import GameWiki from "../pages/Game/Wiki";
import GameToolsSkillCalculator from "../pages/Game/Tools/SkillCalculator";
import GameToolsCraftersCorner from "../pages/Game/Tools/CraftersCorner/Portal";
import GameToolsSpacersDen from "../pages/Game/Tools/SpacersDen/Portal";

// Communtiy
import CommunityDiscord from "../pages/Community/Discord";
import CommunitySenateProposals from "../pages/Community/Senate/SenateProposals";
import CommunitySenateDiscussion from "../pages/Community/Senate/SenateDiscussion";



export const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      { path: "/", element: <Home /> },
	  { path: "support", element: <SupportPortal /> },
      { path: "forge", element: <ForgePortal /> },

      {
        path: "about",
        children: [
          { path: "overview", element: <AboutOverview /> },
          { path: "roadmap", element: <AboutRoadmap /> },
          { path: "staff", element: <AboutStaff /> },
          { path: "senate", element: <AboutSenate /> },
          { path: "volunteering", element: <AboutVolunteering /> },
        ],
      },

      {
        path: "policies",
        children: [
          { path: "privacy", element: <PoliciesPrivacy /> },
          { path: "terms", element: <PoliciesTerms /> },
          { path: "account", element: <PoliciesAccount /> },
          { path: "conduct", element: <PoliciesConduct /> },
          { path: "data", element: <PoliciesData /> },
          { path: "legal", element: <PoliciesLegal /> },
          { path: "rehabilitation", element: <PoliciesRehabilitation /> },
        ],
      },

      {
        path: "news",
        children: [
          { path: "community", element: <NewsCommunity /> },
          { path: "development", element: <NewsDevelopment /> },
          { path: "patch-notes", element: <NewsPatchNotes /> },
        ],
      },

      {
        path: "game",
        children: [
          { path: "play", element: <GamePlay /> },
          { path: "metrics", element: <GameMetrics /> },
          { path: "wiki", element: <GameWiki /> },
          { path: "tools", children: [
            { path: "skill-calculator", element: <GameToolsSkillCalculator /> },
            { path: "crafters-corner", element: <GameToolsCraftersCorner /> },
            { path: "spacers-den", element: <GameToolsSpacersDen /> },
          ]},
        ],
      },

      {
        path: "community",
        children: [
          { path: "discord", element: <CommunityDiscord /> },
          { path: "senate", children: [
            { path: "proposals", element: <CommunitySenateProposals /> },
            { path: "discussion", element: <CommunitySenateDiscussion /> },
          ]},
        ],
      },

	  {
		path: "profile",
	    children: [
	      { path: "register", element: <ProfileRegister /> },
		],
	  }
    ],
  },
]);
