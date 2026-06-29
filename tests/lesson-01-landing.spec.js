import { test, expect } from '@playwright/test';

test('Lesson 01: landing page has the correct course title', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Weather Automation Playground' })).toBeVisible();
});
