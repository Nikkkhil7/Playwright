import { test, expect } from '@playwright/test';

test('Currency conversion from USD to INR with history click', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('https://www.easycalculation.com/', { waitUntil: 'load' });

  // Click the 'Currencies' link
  await Promise.all([
    page.waitForURL('**/currency-converter/**'), // ensures navigation completes
    page.getByRole('link', { name: 'Currencies' }).click()
  ]);

  // On the currency converter page, wait for the dropdown to appear
  const toCurrencySelect = page.locator('#tocur');
  await expect(toCurrencySelect).toBeVisible();

  // Choose INR — use 'label' for readability; adjust if needed
  await toCurrencySelect.selectOption({ label: 'INR' });

  // Wait for the input box to be visible
  const inputBox = page.locator('input[placeholder*="input currency"]');
  await expect(inputBox).toBeVisible();

  // Type the amount
  await inputBox.fill('500000');

  // Click the 'History' link and wait for navigation or any change
  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('link', { name: 'History' }).click()
  ]);

  // Optional: verify that you're on a history-related page
  await expect(page).toHaveURL(/history/);
});
