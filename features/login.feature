Feature: User Authentication

  Background:
    Given I open the login page

  Scenario: Successful login with valid credentials
    When I enter email "qa@chargeflow.com" and password "Password123!"
    And I click the login button
    Then I should be redirected to the dashboard
    And I should see the welcome message "Welcome, qa@chargeflow.com"

  Scenario Outline: Failed login with invalid credentials
    When I enter email "<email>" and password "<password>"
    And I click the login button
    Then I should see an error message or remain on login page

    Examples:
      | email             | password    |
      | wrong@test.com    | Password123!|
      | qa@chargeflow.com | wrongpass   |
      | invalid-email     | 12345       |