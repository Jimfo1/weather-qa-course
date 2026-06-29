# Instructor Solution Guide

Do not show this file to students unless you want to provide hints.

## Lesson 01

Change:

```html
<h1 id="app-title">Weather Dashboard</h1>
```

To:

```html
<h1 id="app-title">Weather Automation Playground</h1>
```

## Lesson 02

Add a simple email validation check before account creation:

```js
const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

if (!emailIsValid) {
  signupMessage.textContent = 'Enter a valid email address.';
  signupMessage.className = 'error';
  return;
}
```

## Lesson 03

Add a password length check:

```js
if (password.length < 8) {
  loginMessage.textContent = 'Password must be at least 8 characters.';
  loginMessage.className = 'error';
  return;
}
```

## Lesson 04

Add city required validation before selecting the default city:

```js
if (!city) {
  weatherError.textContent = 'City is required.';
  return;
}
```

## Lesson 05

Change:

```js
unitLabel.textContent = '°F';
```

To:

```js
unitLabel.textContent = '°C';
```
