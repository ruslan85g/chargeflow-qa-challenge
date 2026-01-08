const { Before, After, BeforeAll, AfterAll, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('@playwright/test');

setDefaultTimeout(30000);

let browser;

BeforeAll(async function () {
  // CI=true is automatically set by GitHub Actions
  const isHeadless = process.env.CI === 'true';
  
  browser = await chromium.launch({ 
    headless: isHeadless 
  });
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