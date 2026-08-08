// SPDX-License-Identifier: AGPL-3.0-only
// Copyright 2026-present the Unsloth AI Inc. team. All rights reserved. See /studio/LICENSE.AGPL-3.0

import { createRoute } from "@tanstack/react-router";
import { Route as rootRoute } from "./__root";

export type OnboardingSearch = { redirectTo?: string };

const WizardLayout = lazy(() =>
  import("@/features/onboarding/components/wizard-layout").then((m) => ({
    default: m.WizardLayout,
  })),
);

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/onboarding",
  staticData: { title: "Onboarding", isAuthFlow: true },
  validateSearch: (search: Record<string, unknown>): OnboardingSearch => ({
    redirectTo: typeof search.redirectTo === "string" ? search.redirectTo : undefined,
  }),
  component: WizardLayout,
});
