const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(30000);

let browser;

BeforeAll(async function () {
  // Run browser once before each test
  browser = await chromium.launch({ headless: false });
});

Before(async function () {
  // new context per each scenario
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  // close page after each scenario
  await this.page.close();
  await this.context.close();
});

AfterAll(async function () {
  await browser.close();
});