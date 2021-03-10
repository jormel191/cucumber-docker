  Feature: duck duck go Search

  Scenario Outline: I wan to seach on  duck-duck-go site
  Given I am on the website duck-duck-go
  And I enter the "<keywork>" to search
  And I navigate to videos search
  Then I should get minimun 2 search results

  Examples:

  |keywork    |
  |java       |
  |webdriver  |
  |docker     |
  |kubernetes |