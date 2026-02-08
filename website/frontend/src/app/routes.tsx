import React from "react";
import { Routes, Route } from "react-router-dom";
import { SiteLayout } from "../layout/SiteLayout";
import { RequireRole } from "../auth/RequireRole";

import { Home } from "../pages/Home";
import { Register } from "../pages/Profile/Register";
import { Support } from "../pages/Support/Support";
import { NotFound } from "../pages/NotFound";

import { AboutOverview } from "../pages/About/Overview";
import { AboutRoadmap } from "../pages/About/Roadmap";
import { AboutStaff } from "../pages/About/Staff";
import { AboutSenate } from "../pages/About/Senate";
import { AboutVolunteering } from "../pages/About/Volunteering";

import { PoliciesPrivacy } from "../pages/Policies/Privacy";
import { PoliciesTerms } from "../pages/Policies/Terms";
import { PoliciesLegal } from "../pages/Policies/Legal";
import { PoliciesData } from "../pages/Policies/Data";
import { PoliciesAccount } from "../pages/Policies/Account";
import { PoliciesConduct } from "../pages/Policies/Conduct";
import { PoliciesRehabilitation } from "../pages/Policies/Rehabilitation";

import { NewsPatchNotes } from "../pages/News/PatchNotes";
import { NewsCommunity } from "../pages/News/Community";
import { NewsDevelopment } from "../pages/News/Development";

import { GamePlay } from "../pages/Game/Play";
import { GameWiki } from "../pages/Game/Wiki";
import { GameMetrics } from "../pages/Game/Metrics";
import { ToolSkillCalculator } from "../pages/Game/Tools/SkillCalculator";
import { ToolCraftersCorner } from "../pages/Game/Tools/CraftersCorner/CraftersCorner";
import { ToolSpacersDen } from "../pages/Game/Tools/SpacersDen/SpacersDen";

import { CommunitySenateProposals } from "../pages/Community/Senate/Proposals";
import { CommunitySenateDiscussion } from "../pages/Community/Senate/Discussion";
import { CommunityDiscord } from "../pages/Community/Discord";

import { ForgeLayout } from "../forge/ForgeLayout";
import { ForgeLanding } from "../pages/Forge/ForgeLanding";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/register" element={<Register />} />
        <Route path="/support" element={<Support />} />

        <Route path="/about/overview" element={<AboutOverview />} />
        <Route path="/about/roadmap" element={<AboutRoadmap />} />
        <Route path="/about/staff" element={<AboutStaff />} />
        <Route path="/about/senate" element={<AboutSenate />} />
        <Route path="/about/volunteering" element={<AboutVolunteering />} />

        <Route path="/policies/privacy" element={<PoliciesPrivacy />} />
        <Route path="/policies/terms" element={<PoliciesTerms />} />
        <Route path="/policies/legal" element={<PoliciesLegal />} />
        <Route path="/policies/data" element={<PoliciesData />} />
        <Route path="/policies/account" element={<PoliciesAccount />} />
        <Route path="/policies/conduct" element={<PoliciesConduct />} />
        <Route path="/policies/rehabilitation" element={<PoliciesRehabilitation />} />

        <Route path="/news/patch-notes" element={<NewsPatchNotes />} />
        <Route path="/news/community" element={<NewsCommunity />} />
        <Route path="/news/development" element={<NewsDevelopment />} />

        <Route path="/game/play" element={<GamePlay />} />
        <Route path="/game/wiki" element={<GameWiki />} />
        <Route path="/game/metrics" element={<GameMetrics />} />
        <Route path="/game/tools/skill-calculator" element={<ToolSkillCalculator />} />
        <Route path="/game/tools/crafters-corner" element={<ToolCraftersCorner />} />
        <Route path="/game/tools/spacers-den" element={<ToolSpacersDen />} />

        <Route path="/community/senate/proposals" element={<CommunitySenateProposals />} />
        <Route path="/community/senate/discussion" element={<CommunitySenateDiscussion />} />
        <Route path="/community/discord" element={<CommunityDiscord />} />

        {/* Forge (staff-only) */}
        <Route
          path="/forge/*"
          element={
            <RequireRole role="STAFF">
              <ForgeLayout />
            </RequireRole>
          }
        >
          <Route path="" element={<ForgeLanding />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
