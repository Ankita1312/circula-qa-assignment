// tests/country.spec.js
const { test, expect } = require("@playwright/test");
const SignupPage = require("../pages/signupPage");

test.describe("Country Selection Tests", () => {
  let signupPage;

  test.beforeEach(async ({ page }) => {
    signupPage = new SignupPage(page);

    // Navigate to Sign-in page and start the Sign-up flow
    await signupPage.gotoSignInPage();
    await signupPage.acceptCookies();
    await signupPage.clickStartFreeTrial();

    // Fill out the initial Sign-up form
    await signupPage.acceptCookies();
    await signupPage.fillEmailAndPassword("QA@cicula.com", "Password123!");

    // Fill out the Name form
    await signupPage.fillNameForm("QA", "Analyst");

    // Fill out the Company form (up to the country selection)
    await signupPage.fillCompanyName("QA test Company");
  });

  test("Verify that Sweden is present in the dropdown list", async ({
    page,
  }) => {
    await signupPage.openCountryDropdown();
    await signupPage.fillCountry("Sweden");
    await expect(page.locator("text=Sweden")).toBeVisible();
  });

  test("Verify that the user can select Sweden from the dropdown", async ({
    page,
  }) => {
    await signupPage.openCountryDropdown();
    await signupPage.fillCountry("Sweden");
    await signupPage.selectCountry("Sweden");
    await expect(page.locator("text=Sweden")).toBeVisible();
  });

  test('Verify that typing "SWED" shows "Sweden" and "Switzerland"', async ({
    page,
  }) => {
    await signupPage.openCountryDropdown();
    await signupPage.fillCountry("SWED");
    await expect(page.locator("text=Sweden")).toBeVisible();
    await expect(page.locator("text=Switzerland")).toBeVisible();
  });

  test('Verify that typing "SWEDN" shows ONLY "Sweden"', async ({
    page,
  }) => {
    await signupPage.openCountryDropdown();
    await signupPage.fillCountry("SWEDN");
    await expect(page.locator("text=Sweden")).toBeVisible();
    await expect(page.locator("text=Switzerland")).not.toBeVisible();
  });

  test('Verify that typing a non-existent country (e.g., "werwer") displays an appropriate message', async ({
    page,
  }) => {
    await signupPage.openCountryDropdown();
    await signupPage.fillCountry("werwer");
    await expect(signupPage.noCountryMessage).toBeVisible();
  });
});
