# Lesson 02 — Form Validation: Signup Email

## QA Ticket

The signup form accepts an invalid email address.

## Acceptance Criteria

When the user enters an invalid email, the app should show:

```text
Enter a valid email address.
```

## Steps

1. Open the app.
2. Enter a name.
3. Enter `not-an-email` as the email.
4. Click **Sign Up**.
5. Confirm the app incorrectly creates the account.
6. Open `src/main.js`.
7. Find `SEEDED BUG 2`.
8. Add email validation.
9. Commit and retest.

## Test File

`tests/lesson-02-signup.spec.js`
