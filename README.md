# meet app

this is a wip I'm using to practice react. 

## user stories
1. Filter Events by City
As a user, I should be able to filter events by city, so that I can quickly find events happening in a specific location.
2. Show/Hide Details of Events
As a user, I should be able to show or hide the details of events, so that I can easily manage the amount of information displayed based on my preference.
3. Specify Number of Events
As a user, I should be able to specify the number of events I want to see, so that I can control how much information is presented to me at once.
4. Use App When Offline
As a user, I should be able to use the app even when I'm offline, so that I can access important information about events without an internet connection.
5. Add App Shortcut to Home Screen
As a user, I should be able to add an app shortcut to my home screen, so that I can quickly access the app with a single tap.
6. Display Charts Visualizing Event Details
As a user, I should be able to view charts that visualize event details, so that I can easily understand and analyze event data at a glance.

## features 
1. Feature: Filter events by city
  As a user, I want to filter events by city so that I can quickly find events happening in a specific location.

  Scenario: Filter events for a specific city
    Given I am on the events page
    When I select a city from the filter options
    Then I should see only events happening in the selected city
2. Feature: Show/hide details of events
  As a user, I want to show or hide the details of events so that I can easily manage the amount of information displayed.

  Scenario: Toggle event details visibility
    Given I am viewing a list of events
    When I click the "Show details" button for an event
    Then I should see the details of that event
    And when I click the "Hide details" button for the same event
    Then I should see the details of that event hidden
3. Feature: Specify number of events
  As a user, I want to specify the number of events I want to see so that I can control how much information is presented to me.

  Scenario: Set the number of events to display
    Given I am on the events page
    When I set the number of events to display to a specific value
    Then I should see only that number of events listed on the page
4. Feature: Use app when offline
  As a user, I want to use the app when I'm offline so that I can access important information about events without an internet connection.

  Scenario: Access the app offline
    Given I have accessed the app online at least once
    When I go offline
    Then I should still be able to view event information previously loaded in the app
5. Feature: Add app shortcut to home screen
  As a user, I want to add an app shortcut to my home screen so that I can quickly access the app with a single tap.

  Scenario: Add app shortcut
    Given I am using the app in a mobile browser
    When I select the option to add the app to my home screen
    Then I should see a shortcut icon for the app on my home screen
    And when I tap the shortcut icon
    Then the app should open directly
6. Feature: Display charts visualizing event details
  As a user, I want to view charts that visualize event details so that I can easily understand and analyze event data.

  Scenario: View charts for event details
    Given I am viewing the details of an event
    When I select the option to view charts
    Then I should see charts that visualize key event details


## technologies used 
- react
- reduct