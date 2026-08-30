# Day 3 — Build Login & Signup Cards

**Goal:** Build both a Login and a Signup form as cards, with real client-side validation. This tests form handling and validation state — the most common UI pattern you'll build repeatedly on real projects.

## Requirements

- **Login card:** email field, password field, a submit button, a "don't have an account?" link
- **Signup card:** name, email, password, confirm password fields, a submit button, a "already have an account?" link
- Client-side validation:
  - Show an error message under a field if it's empty on submit
  - Show an error if email doesn't look like a valid email format
  - Show an error if password and confirm password don't match (signup)
- A toggle to switch between showing the Login card and the Signup card (they don't need to be separate pages/routes for this task)
- Use Tailwind utility classes only

## Not Required

- Actual authentication logic or a real backend call — that's Day 4 territory, and this task is about the form and validation UI itself
- Password strength meters or show/hide password toggles — nice extras, but not required

## Submit

1. Put your project in `submissions/<your-name>/day-3/`
2. Open a PR titled `Day 3 — Auth Cards — <your name>`
3. Mention in the PR description which validation cases you tested

## Deadline

By end of day, Day 3.
