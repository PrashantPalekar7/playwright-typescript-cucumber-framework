import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { Page } from '@playwright/test';

Given('I navigate to the Playwright website', async function () {
  const page: Page = this.page;
  await page.goto('https://playwright.dev/');
});

When('I click the {string} link', async function (linkName: string) {
  const page: Page = this.page;
  await page.getByRole('link', { name: linkName }).click();
});

Then('the page title should contain {string}', async function (expectedTitle: string) {
  const page: Page = this.page;
  await expect(page).toHaveTitle(new RegExp(expectedTitle));
});

Then('I should see the {string} heading', async function (headingText: string) {
  const page: Page = this.page;
  await expect(page.getByRole('heading', { name: headingText })).toBeVisible();
});
