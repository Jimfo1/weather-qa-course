# Lesson 01 — Smoke Test: Landing Page Title

## QA Ticket

The landing page title does not match the acceptance criteria.

## Acceptance Criteria

The main page heading should display:

```text
Weather Automation Playground
```

## Steps

1. Open the deployed app.
2. Confirm the current heading is incorrect.
3. Open `src/main.js` in github.dev.
4. Find `SEEDED BUG 1`.
5. Correct the heading text.
6. Commit your change.
7. Wait for GitHub Actions to run.
8. Confirm the Playwright test passes.

## Test File

`tests/lesson-01-landing.spec.js`
