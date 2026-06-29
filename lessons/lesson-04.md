# Lesson 04 — Negative Testing: Blank City Search

## QA Ticket

The weather search defaults to Philadelphia when city is blank.

## Acceptance Criteria

When city is blank, the app should show:

```text
City is required.
```

The app should not call the weather API.

## Steps

1. Open the app.
2. Leave city blank.
3. Click **Get Weather**.
4. Confirm the app incorrectly shows Philadelphia weather.
5. Open `src/main.js`.
6. Find `SEEDED BUG 4`.
7. Add required city validation.
8. Commit and retest.

## Test File

`tests/lesson-04-weather-validation.spec.js`
