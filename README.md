# IPT Frontend Roadmap

A 5-day skill-building sequence for frontend developers on the IPT (Industrial Practice Training) team. One task per day, submitted as a pull request, reviewed individually. This exists to build real skill fast **and** give the Frontend Lead a clear, fair way to track each member's progress.

This roadmap follows the conventions already set in the [IPT SPECIAL Frontend Developer Team Guide](#) — same tech stack (React + Tailwind CSS + JavaScript), same delivery standards, same PR/review process. If you haven't read that guide yet, read it before starting Day 1.

---

## How This Works

1. Each day has its own folder (`day-1-dashboard`, `day-2-navbar`, etc.) containing that day's task brief.
2. Do the task, then submit your work inside `submissions/<your-name>/day-N/`.
3. Open a pull request for that day's work by the deadline stated in the day's README.
4. The Frontend Lead reviews and marks it on the scoreboard below.
5. Move to the next day only after your current day is submitted — don't skip ahead.

**One task per day. No exceptions, no doubling up two tasks in one day.** The point is steady, visible progress, not a rush at the end.

---

## The 5 Days

| Day | Task | Folder |
|---|---|---|
| 1 | Build a Dashboard UI (static) | [`day-1-dashboard/`](./day-1-dashboard) |
| 2 | Build a Responsive Navbar | [`day-2-navbar/`](./day-2-navbar) |
| 3 | Build Login & Signup Cards | [`day-3-auth-cards/`](./day-3-auth-cards) |
| 4 | Integrate a Component with an API | [`day-4-api-integration/`](./day-4-api-integration) |
| 5 | Capstone — Combine Days 1–4 | [`day-5-capstone/`](./day-5-capstone) |

---

## Submission Structure

```
submissions/
└── your-name/
    ├── day-1/
    ├── day-2/
    ├── day-3/
    ├── day-4/
    └── day-5/
```

Use your actual name (or GitHub username) as the folder name — consistently, across all 5 days. Each day's folder should be a runnable project (or a clear component you can point to and explain), not just a screenshot.

---

## Scoreboard

Updated by the Frontend Lead as PRs are reviewed.

| Member | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 |
|---|---|---|---|---|---|
| _(example)_ | ✅ | ⏳ | — | — | — |

**Legend:** ✅ Approved &nbsp;&nbsp; ⏳ In Review &nbsp;&nbsp; ❌ Needs Rework &nbsp;&nbsp; — Not Started

---

## What Gets You an ✅

- Matches the task's stated requirements (check each day's README — don't guess)
- Follows the tech stack and delivery standards from the Frontend Team Guide (Tailwind utility classes, functional components, Conventional Commits)
- Has visible loading and error states wherever the task involves data (see the Loading & Error State Standard)
- Actually runs — `npm install && npm run dev` should work with no errors
- Opened as a PR, not just pushed straight to main

## What Gets You a ❌ (needs rework, not a punishment — just try again)

- Missing a stated requirement
- Doesn't run, or throws console errors
- Custom CSS files instead of Tailwind utilities, with no good reason
- No PR — code just appears in the submissions folder without review

---

Questions go to the Frontend Lead before the deadline, not after. If a task brief is unclear, ask — that's a five-minute conversation, not a reason to guess and redo it later.
