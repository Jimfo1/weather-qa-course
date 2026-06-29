import { test, expect } from '@playwright/test';

test('Lesson 03: login requires password of at least 8 characters', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email', { exact: true }).fill('student@example.com');
  await page.getByLabel('Password').fill('short');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByText('Password must be at least 8 characters.')).toBeVisible();
});
