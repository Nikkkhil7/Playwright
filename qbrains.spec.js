import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qabrains.com/practice-site');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Start Testing Now' }).click();
  const page1 = await page1Promise;
  await page1.getByText('Registration').click();
  await page1.getByText('Forgot Password').click();
  await page1.getByText('Form Submission').click();
  await page1.getByText('Drag and Drop List').click();
  await page1.getByText('E-Commerce Site').click();
  await page1.getByRole('button', { name: 'View Test Case' }).click();
  await page1.getByText('Add to Cart & Remove ItemsVerify items can be added to cart.Verify quantity').click();
  await page1.getByRole('button', { name: 'Close' }).click();
});