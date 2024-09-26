Feature: Show and hide event details

 Scenario: An event element is collapsed by default. 
  Given the user is on the main page
  When the event list is displayed
  Then the event details should be hidden by default

 Scenario: User can expand an event to see details.
  Given the main page is open
  And the event list is displayed 
  When the user clicks on the “show details” button for an event
  Then the event details should be displayed

 Scenario: User can collapse an event to hide details. 
  Given the user has expanded an event to see details
  When the user clicks on the “hide details” button for that event
  Then the event details should be hidden again