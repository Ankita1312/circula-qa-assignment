// pages/SignupPage.js
const { expect } = require("@playwright/test");

class SignupPage {
  constructor(page) {
    this.page = page;
    this.startFreeTrialLink = page.getByRole("link", {
      name: "Start a free trial",
    });
    this.cookieButton = page.locator(
      'button[data-testid="uc-accept-all-button"]'
    );
    this.emailField = page.locator('input[name="email"]');
    this.passwordField = page.locator('input[name="password"]');
    this.acceptTosCheckbox = page.locator('input[name="acceptTos"]');
    this.tryForFreeButton = page.locator('button:has-text("Try for free")');

    // Name Page Locators (on Sign-up form)
    this.firstNameField = page.locator('input[name="firstname"]');
    this.lastNameField = page.locator('input[name="lastname"]');
    this.nextStepButton = page.locator('button:has-text("Next step")');

    // Company Page Locators (on Sign-up form)
    this.companyNameField = page.getByRole("textbox", { name: "Company name" });
    this.countryDropdownLocator = page.getByRole("combobox", {
      name: "Where’s your company",
    });

    this.createAccountButton = page.getByRole("button", {
      name: "Create an account",
    });
    this.noCountryMessage = page.locator("text=Can’t find your country?");
  }

  // Navigation to the signIn page
  async gotoSignInPage() {
    await this.page.goto("/users/sign_in");
  }

  async acceptCookies() {
    // Wait for a short time to allow the cookie banner to appear (adjust as needed)
    await this.page.waitForTimeout(3000);

    const cookieButton = this.cookieButton;
    if (await cookieButton.isVisible()) {
      await cookieButton.click();
    }
  }

  async clickStartFreeTrial() {
    await this.startFreeTrialLink.click();
  }

  async fillEmailAndPassword(email, password) {
    await this.emailField.fill(email);
    await this.passwordField.fill(password);
    await this.acceptTosCheckbox.click({ force: true });
    await this.tryForFreeButton.click();
  }

  async fillNameForm(firstName, lastName) {
    await this.firstNameField.fill(firstName);
    await this.lastNameField.fill(lastName);
    await this.nextStepButton.click();
  }

  // Company Page Methods
  async fillCompanyName(companyName) {
    await this.companyNameField.fill(companyName);
  }

  async openCountryDropdown() {
    await this.countryDropdownLocator.click();
  }

  async fillCountry(country) {
    await this.countryDropdownLocator.fill(country);
  }

  async selectCountry(country) {
    await this.page.getByRole("option", { name: country });
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }
}

module.exports = SignupPage;
