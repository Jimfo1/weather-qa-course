import { test, expect } from '@playwright/test';

test('Lesson 05: weather results show Celsius unit label', async ({ page }) => {
  await page.route('https://api.open-meteo.com/**', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ current_weather: { temperature: 22, weathercode: 0 } }),
    });
  });

  await page.goto('/');
  await page.getByLabel('City').fill('Philadelphia');
  await page.getByRole('button', { name: 'Get Weather' }).click();
  await expect(page.getByRole('heading', { name: 'Philadelphia' })).toBeVisible();
  await expect(page.getByText('22 °C')).toBeVisible();
  await expect(page.getByText('Clear sky')).toBeVisible();
});
