# CompHunt

A modern, Apple/Linear-inspired web app that helps high school students (ages 13–18) discover
competitions, scholarships, research programs, summer schools, internships, volunteering, and
leadership opportunities — personalized with a Fit Score based on their interests, budget, and
availability.

Built with **Next.js 14 (App Router) + TypeScript + Tailwind CSS**.

## Getting started

This project was written by hand (Node.js/npm was not available in the environment that generated
it, so dependencies have never been installed and the dev server has never been run). To run it:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # eslint
```

## What to check first

Since this codebase hasn't been run yet, after `npm install`:

1. `npm run dev` and confirm the homepage loads at `/`.
2. Click **"Find My Opportunities"** → walk through onboarding (every step has a Skip button) →
   confirm it lands on `/opportunities` with a Fit Score badge on each card.
3. Try search and filters on `/opportunities` — results should update instantly.
4. Open any opportunity card → confirm the detail page renders all sections and "Similar
   Opportunities" shows real cards (not blank).
5. Bookmark a couple of opportunities, then check `/dashboard` — Saved, Recently Viewed, Upcoming
   Deadlines, and Recommended For You should all populate.
6. Press `Ctrl+K` / `Cmd+K` anywhere to open the command palette.
7. Toggle dark mode from the navbar.

If `npm run build` reports type errors, they're most likely minor and easy to fix — please report
them back and they can be patched quickly.

## Project structure

```
app/                     Next.js App Router pages
  page.tsx               Landing page
  onboarding/            Multi-step quiz (age, grade, interests, budget, etc.)
  opportunities/         Browse/search/filter page + [slug] detail page
  dashboard/             Saved / recently viewed / deadlines / recommended
  layout.tsx             Root layout (fonts, providers, navbar, footer, command palette)
  globals.css            Design tokens & base styles

components/
  ui/                    Small reusable primitives (Badge, Button, PrestigeStars, FitScoreRing…)
  layout/                Navbar, Footer, ThemeToggle
  command/               Ctrl+K command palette
  landing/               Hero, HowItWorks, FeaturedOpportunities, Testimonials, FAQ…
  opportunities/         OpportunityCard, FilterPanel, OpportunityDetail

context/
  AppStateContext.tsx    Student profile, saved opportunities, recently viewed (localStorage)
  ThemeContext.tsx       Light/dark mode

lib/
  types.ts               Shared TypeScript types & enums
  matching.ts            Fit Score algorithm + recommendation sorting
  utils.ts               cn(), date/countdown formatting
  useLocalStorage.ts      Generic localStorage-backed state hook

data/
  opportunities.ts       280 real, researched opportunities across 13 categories
```

## Data

The 280 sample opportunities are based on real, well-known programs (Research Science Institute,
Regeneron STS/ISEF, USAMO/USACO, FIRST Robotics, Wharton's Investment Competition, YoungArts, Model
UN conferences, NIH's Summer Internship Program, Davidson Fellows, Foyle Young Poets, the John Locke
Institute Essay Competition, the Marshall Society Economics Essay Competition, QuestBridge, the Gates
Scholarship, National Merit, and many more) with realistic deadlines,
eligibility, application steps, and tips — not placeholder/lorem-ipsum content. Swap
`data/opportunities.ts` for a real database (see below) whenever you're ready.

## Extending this prototype

The app currently stores everything in `localStorage` via `context/AppStateContext.tsx`, and reads
opportunities from a static array in `data/opportunities.ts`. Both are intentionally isolated so
they're easy to swap out:

- **Supabase / real database**: replace `data/opportunities.ts` with Supabase queries (e.g. a
  `lib/supabase.ts` client + a `getOpportunities()` fetcher). The `Opportunity` type in
  `lib/types.ts` maps cleanly to a Postgres table.
- **Authentication**: swap `context/AppStateContext.tsx`'s localStorage persistence for a Supabase-
  backed `profiles` / `saved_opportunities` table keyed by user ID, gated behind Supabase Auth.
- **AI recommendations**: `lib/matching.ts` currently uses a transparent, rule-based weighted
  score. It's a natural place to add an LLM-based re-ranking step or embeddings-based similarity
  search once real usage data exists.
- **CMS-managed opportunities**: since all opportunity data conforms to one `Opportunity` type, it
  can be moved to a headless CMS or admin dashboard without touching any UI components.

## Notes on environment

Node.js/npm were not installed in the sandbox this project was generated in, so the code has not
been built, type-checked, or run in a browser. It was written carefully by hand against known,
stable APIs (Next.js 14 App Router, React 18, Tailwind CSS 3.4, Framer Motion 11, lucide-react), but
please run `npm run build` after install and report back anything that needs fixing.
