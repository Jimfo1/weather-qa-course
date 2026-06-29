# Weather QA Automation Course

A beginner-friendly QA automation training project using GitHub, github.dev, GitHub Actions, GitHub Pages, Playwright, and the Open-Meteo weather API.

This repository is intentionally broken. Students fork the repo, deploy it, run automated tests, fix seeded defects, commit changes, and allow GitHub Actions to redeploy the app.

## Course Flow

1. Fork this repository.
2. Open your fork in github.dev.
3. Enable GitHub Pages using GitHub Actions.
4. Run the GitHub Actions workflows.
5. Open the deployed GitHub Pages site.
6. Run Playwright tests.
7. Fix the seeded defect for the current lesson.
8. Commit your fix.
9. Let GitHub Actions redeploy.
10. Retest and move to the next lesson.

## Student Tools

Students do not need VS Code or IntelliJ installed.

They can use:

- GitHub in the browser
- github.dev
- GitHub Actions
- GitHub Pages
- Playwright through GitHub Actions

## Local Setup Optional

If a student wants to run locally:

```bash
npm install
npx playwright install
npm run build
npm test
```

## Lessons

| Lesson | QA Skill | Seeded Defect |
|---|---|---|
| 01 | Smoke Testing | Landing page title is wrong |
| 02 | Form Validation | Signup accepts invalid email |
| 03 | Login Validation | Login accepts short password |
| 04 | Negative Testing | Blank weather search defaults to Philadelphia |
| 05 | API/UI Validation | Weather API returns Celsius but UI displays Fahrenheit |

## Instructor Notes

The defects are intentionally placed in `src/main.js` and marked with `SEEDED BUG` comments.

The tests are in the `tests` folder. Each test file maps to a lesson.

The GitHub Actions workflows are in `.github/workflows`:

- `playwright.yml` runs automated tests and uploads a Playwright report.
- `deploy-pages.yml` builds and deploys the app to GitHub Pages.

## Suggested Teaching Model

Each lesson should be framed like a QA ticket:

- Review acceptance criteria.
- Reproduce the defect.
- Run the automated test.
- Identify the failure.
- Fix the application code.
- Commit the change.
- Wait for GitHub Actions to run.
- Verify the fix on the deployed site.
- Rerun the regression test.

