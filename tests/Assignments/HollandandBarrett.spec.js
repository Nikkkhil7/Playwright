import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hollandandbarrett.com/');
  await page.getByRole('button', { name: 'Yes I Accept' }).click();
  await page.getByRole('link', { name: 'Vitamins & Supplements' }).click();
  await page.getByRole('link', { name: 'Add to favourite button Image 1 for Milk Thistle 100mg 60 Capsules Image 2 for' }).locator('[data-test="button-ProductCard"]').click();
  await page.getByTestId('basket-link').click();
  await page.getByRole('link', { name: 'View all products in 3 for 2' }).click();
  await page.getByTestId('basket-link').click();
  await page.locator('div').filter({ hasText: /^Basket - 1 item£18\.99Checkout$/ }).getByRole('button').click();
  await page.goto('https://www.hollandandbarrett.com/checkout');
});