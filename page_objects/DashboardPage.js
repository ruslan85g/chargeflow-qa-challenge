class DashboardPage {
    constructor(page) {
      this.page = page;
      this.welcomeMsg = page.locator('.welcome-message');
      this.navLinks = page.locator('.nav-links');
      this.logoutBtn = page.locator('button:has-text("Logout")');
      this.openItemsCount = page.locator('.dashboard-card:has-text("Open Items") .card-count');
    }
  }
  module.exports = { DashboardPage };