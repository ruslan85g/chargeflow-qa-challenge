# Chargeflow QA Automation Assignment

## Project Overview
This project is a Senior-level QA Automation suite built using **Playwright** and **Cucumber (Gherkin)**. It covers the login and dashboard functionality of the Chargeflow QA Challenge application.

## Decisions & Solutions
- **Framework Choice**: Playwright was chosen for its speed, built-in waiting mechanisms, and superior reliability over Selenium.
- **BDD Approach**: Cucumber provides clear, business-readable documentation and ensures comprehensive test coverage.
- **Page Object Model (POM)**: Implemented to separate test logic from UI selectors, making the suite maintainable.
- **Wait Strategy**: Used `domcontentloaded` wait state for faster execution while ensuring the DOM is ready for interaction.
- **Session Management**: Included a cookie-clearing mechanism in the `Before` hooks to ensure test isolation.

## How to Run
1. Install dependencies: `npm install`
2. Run tests: `npx cucumber-js`
3. Generate HTML report: `npm run report` (if script is added to package.json)