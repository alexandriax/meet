Feature: Specify Number of Events

 Scenario: When user hasn't specified a number, 32 events are shown by default. 
   Given the user is on the main page
   When the event list is displayed
   Then the default number of displayed events should be 32
 
 Scenario: User can change the number of events displayed.
   Given the user is on the main page
   When the user specifies a number of events to display 
   Then the event list should update to show the specified number of events