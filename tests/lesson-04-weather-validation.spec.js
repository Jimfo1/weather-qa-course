import { test, expect } from '@playwright/test';

test('Lesson 04: weather search requires a city', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Get Weather' }).click();
  await expect(page.getByText('City is required.')).toBeVisible();
});
