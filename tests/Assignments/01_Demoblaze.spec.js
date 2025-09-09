import {test, expect} from "@playwright/test"
test("Validate_Title_and_URL", async ({ page }) => {
    await page.goto('https://demoblaze.com/');

    const actualTitle = await page.title();

    const actualURL = page.url();

    const expectedTitle = "STORE";
    const expectedURL = 'https://demoblaze.com/';

    expect(actualTitle).toBe(expectedTitle);
    expect(actualURL).toBe(expectedURL);
});