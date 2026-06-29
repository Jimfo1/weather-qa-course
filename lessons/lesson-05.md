# Lesson 05 — API/UI Validation: Temperature Unit

## QA Ticket

The weather API is called using Celsius, but the UI displays Fahrenheit.

## Acceptance Criteria

When the API returns Celsius, the result should display the Celsius unit label:

```text
°C
```

## Steps

1. Open the app.
2. Search for Philadelphia.
3. Observe the temperature unit.
4. Open `src/main.js`.
5. Find `SEEDED BUG 5`.
6. Correct the unit label.
7. Commit and retest.

## Test File

`tests/lesson-05-weather-results.spec.js`
