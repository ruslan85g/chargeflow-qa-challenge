class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.locator('#email');
      this.passwordInput = page.locator('#password');
      this.submitBtn = page.locator('button[type="submit"]');
      this.loginTitle = page.locator('.login-title');
    }
  
    async navigate() {
      await this.page.goto('https://qa-automation-assignment.chargeflow.io/login');
      // Ensure clean session for each test
      await this.page.context().clearCookies();
    }
  
    async login(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
    }
  }
  module.exports = { LoginPage };