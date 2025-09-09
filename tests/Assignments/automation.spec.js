import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
  await page.getByRole('textbox', { name: 'Name:' }).click();
  await page.getByRole('textbox', { name: 'Name:' }).fill('Nikhil');
  await page.getByRole('textbox', { name: 'Email:' }).click();
  await page.getByRole('textbox', { name: 'Email:' }).fill('nikhil19257@gmail.com');
  await page.getByText('Male', { exact: true }).click();
  await page.getByRole('radio', { name: 'Gender:' }).check();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).click();
  await page.getByRole('textbox', { name: 'Mobile(10 Digits):' }).fill('7899062507');
});