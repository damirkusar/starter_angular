
Feature: Example
  As a user
  i want to see the title
  So that i know am on the correct page

  Scenario Outline: Check Page Title
    Given I am on the "home" page
    Then I should see the following text <text> on "appHeader"

    Examples:
      | text                          |
      | 'Welcome to Angular Starter!' |

