const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { LoginPage } = require('../../page_objects/LoginPage');
const { DashboardPage } = require('../../page_objects/DashboardPage');

// Setup pages and navigate
Given('I open the login page', async function () {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigate();
});

// Fill credentials
When('I enter email {string} and password {string}', async function (email, password) {
  await this.loginPage.login(email, password);
});

// Click submit with DOM content loaded wait
When('I click the login button', async function () {
  await Promise.all([
    this.page.waitForLoadState('domcontentloaded'),
    this.loginPage.submitBtn.click()
  ]);
});

// Assertions for successful login
Then('I should be redirected to the dashboard', async function () {
  await expect(this.page).toHaveURL(/.*dashboard/);
});

Then('I should see the welcome message {string}', async function (message) {
  this.dashboardPage = new DashboardPage(this.page);
  await expect(this.dashboardPage.welcomeMsg).toHaveText(message);
});

// Assertions for failed login
Then('I should see an error message or remain on login page', async function () {
  await expect(this.loginPage.loginTitle).toBeVisible();
});

// Dashboard card validation
Then('I should see a card for {string} with count {string}', async function (cardTitle, count) {
  const countLocator = this.page.locator(`.dashboard-card:has-text("${cardTitle}") .card-count`);
  await expect(countLocator).toHaveText(count);
});

// Navigation links
When('I click on the {string} navigation link', async function (linkText) {
  await this.page.click(`nav a:has-text("${linkText}")`);
});

Then('I should be redirected to the {string} page', async function (path) {
  await expect(this.page).toHaveURL(new RegExp(path));
});

// Logout functionality
When('I click the logout button', async function () {
  this.dashboardPage = new DashboardPage(this.page);
  await this.dashboardPage.logoutBtn.click();
});

Then('I should be redirected to the login page', async function () {
  await expect(this.page).toHaveURL(/.*login/);
});