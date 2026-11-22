import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/ClassEdu/);
  await expect(page.getByRole('heading', { name: 'Home' })).toBeVisible();
});
