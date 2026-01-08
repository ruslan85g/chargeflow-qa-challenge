Feature: Dashboard Functionality

  Background:
    Given I open the login page
    And I enter email "qa@chargeflow.com" and password "Password123!"
    And I click the login button

  Scenario: Verify Dashboard Cards presence
    Then I should see a card for "Open Items" with count "4"
    And I should see a card for "Reviewed Items" with count "1"

  Scenario: Navigation to Items page
    When I click on the "Items" navigation link
    Then I should be redirected to the "/items" page

  Scenario: Successful Logout
    When I click the logout button
    Then I should be redirected to the login page