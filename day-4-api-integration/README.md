# Day 4 — Integrate a Component with an API

**Goal:** Take one of your earlier components and wire it to a real (or mock) API call. This is the most important day — it directly tests the Loading & Error State Standard every IPT frontend developer is expected to follow. No blank screens allowed.

## Requirements

- Pick a free public API to call (e.g. [JSONPlaceholder](https://jsonplaceholder.typicode.com/), [Rick and Morty API](https://rickandmortyapi.com/), or any similar free API) — or use your own group's real backend if it's ready
- Build a component that fetches a list of items from that API and displays them (e.g. a list of users, posts, or products)
- **The component must visibly show all three states:**
  - **Loading** — a visible spinner or loading indicator while the request is in flight
  - **Error** — a visible, readable error message if the request fails (test this — temporarily break the URL to confirm your error state actually shows)
  - **Loaded** — the real data, or a distinct "no data" message if the list comes back empty
- Use the shared `LoadingState` / `ErrorState` component pattern from the Loading & Error State Standard document — don't build a one-off custom version
- Include a "Retry" button on the error state that re-triggers the request

## Not Required

- Authentication on the API call
- Caching or advanced state management (React Query, SWR, etc.) — plain `useState`/`useEffect` is enough for this task

## Submit

1. Put your project in `submissions/<your-name>/day-4/`
2. Open a PR titled `Day 4 — API Integration — <your name>`
3. In the PR description, confirm explicitly: "I tested the error state by [how you broke it]" — this proves you didn't just build the happy path

## Deadline

By end of day, Day 4. This is the day most likely to reveal real gaps — ask for help early if your error state isn't triggering correctly, don't submit a broken happy-path-only version.
