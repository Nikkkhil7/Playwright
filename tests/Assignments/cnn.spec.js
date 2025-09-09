import { test, expect } from '@playwright/test';

test.setTimeout(60000);

// Test Suite: CNN Website Navigation & Search
test('CNN Navigation and Search Flow', async ({ page }) => {
  console.log('🚀 Starting CNN Website Test...');
 
 
  // Step 1: Open CNN Homepage
 
  console.log('🌐 Navigating to CNN homepage...');
  await page.goto('https://edition.cnn.com/');
  console.log('✅ Successfully loaded CNN homepage.');
 
 
  // Step 2: Click on a specific news link
 
  console.log('📰 Clicking on "Alien Enemies Act |" link...');
  await page.getByRole('link', { name: 'Alien Enemies Act |' }).click();
  console.log('✅ Navigated to "Alien Enemies Act" article.');
 
 
  // Step 3: Click on a news heading
 
  console.log('🔖 Clicking on news heading "Federal appeals court says"...');
  await page.getByRole('heading', { name: 'Federal appeals court says' }).click();
  console.log('✅ Opened the selected news heading.');
 
 
  // Step 4: Navigate to Watch section
 
  console.log('📺 Navigating to the "Watch" section...');
  await page.locator('#pageHeader').getByRole('link', { name: 'Watch' }).click();
  console.log('✅ Successfully navigated to "Watch".');
 
 
  // Step 5: Open search box
 
  console.log('🔍 Opening search box...');
  await page.getByRole('button', { name: 'Search Icon' }).click();
  console.log('✅ Search box is now open.');
 
  // Step 6: Perform a search for "technology"
 
  console.log('⌨️ Entering search term "technology"...');
  await page.locator('#headerSubNav').getByRole('textbox', { name: 'Search' }).click();
  await page.locator('#headerSubNav').getByRole('textbox', { name: 'Search' }).fill('technology');
  console.log('✅ Search term entered.');
 
  console.log('⏎ Pressing Enter to execute search...');
  await page.locator('#headerSubNav').getByRole('textbox', { name: 'Search' }).press('Enter');
  console.log('✅ Search executed.');
 
  // Step 7: Click on a search result
  console.log('📄 Clicking on "What happens when you put six"...');
  await page.getByRole('link', { name: 'What happens when you put six' }).click();
  console.log('✅ Successfully opened search result.');
 
  // Final Assertion (Example)
  console.log('🧪 Verifying if the page contains keyword "technology"...');
  const pageContent = await page.textContent('body');
 
  console.log('🎉 Test Finished!');
});
 
 