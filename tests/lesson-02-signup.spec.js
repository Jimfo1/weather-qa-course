import { test, expect } from '@playwright/test';

test('Lesson 02: signup rejects invalid email address', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Name').fill('Jane Tester');
  await page.getByLabel('Email').fill('not-an-email');
  await page.getByRole('button', { name: 'Sign Up' }).click();
  await expect(page.getByText('Enter a valid email address.')).toBeVisible();
});
