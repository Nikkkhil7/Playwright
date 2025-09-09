import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.myntra.com/');
  await page.locator('#desktop-header-cnt').getByRole('link', { name: 'Men', exact: true }).click();
  await page.locator('.slick-slide.slick-active > div > div > div > div > div:nth-child(5) > .container-base > div > .container-container > .row-base > .column-base > a > .img-responsive > .image-image').first().click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'The Indian Garage Co Men Relaxed Fit Mid-Rise Jeans The Indian Garage Co Men' }).click();
  const page1 = await page1Promise;
  await page1.getByText('ADD TO BAG').click();
});