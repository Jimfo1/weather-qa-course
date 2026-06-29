# Lesson 03 — Login Validation: Password Length

## QA Ticket

The login form allows short passwords.

## Acceptance Criteria

When password length is less than 8 characters, the app should show:

```text
Password must be at least 8 characters.
```

## Steps

1. Open the app.
2. Enter `student@example.com`.
3. Enter `short` as the password.
4. Click **Login**.
5. Confirm the app incorrectly allows login.
6. Open `src/main.js`.
7. Find `SEEDED BUG 3`.
8. Add password length validation.
9. Commit and retest.

## Test File

`tests/lesson-03-login.spec.js`
