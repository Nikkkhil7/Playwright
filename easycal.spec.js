import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.easycalculation.com/');
  await page.getByRole('link', { name: 'Currencies' }).click();
  await page.locator('#tocur').selectOption('82.526-INR');
  await page.goto('https://www.easycalculation.com/currency-converter/currency-USD-INR.html');
  await page.getByRole('textbox', { name: 'input currency here' }).click();
  await page.getByRole('textbox', { name: 'input currency here' }).fill('500000');
  await page.getByRole('link', { name: 'History' }).click();
});