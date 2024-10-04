# Meet App

Meet is a web application built using React to practice modern front-end development. It provides users with the ability to view, filter, and explore upcoming events. It’s also a progressive web app (PWA) that can function offline and be added as a shortcut to a user’s device home screen.

## User Stories
1. **Filter Events by City**  
   As a user, I want to filter events by city so that I can quickly find events happening in a specific location.
   
2. **Show/Hide Details of Events**  
   As a user, I want to show or hide event details so that I can manage how much information is displayed based on my preference.
   
3. **Specify Number of Events**  
   As a user, I want to specify the number of events displayed so that I can control how much information is presented at once.
   
4. **Use App Offline**  
   As a user, I want to use the app even when offline, so I can access event information without an internet connection.
   
5. **Add App Shortcut to Home Screen**  
   As a user, I want to add an app shortcut to my home screen, allowing me quick access with a single tap.

6. **Display Charts Visualizing Event Details**  
   As a user, I want to view charts that visualize event details, so I can easily understand and analyze event data.

## Features

### Feature 1: Filter Events by City
- **Scenario 1**: Show upcoming events from all cities when no city is searched.
- **Scenario 2**: Display a list of suggestions when searching for a city.
- **Scenario 3**: Allow the user to select a city from the suggestions.

### Feature 2: Show/Hide Event Details
- **Scenario 1**: Event elements are collapsed by default.
- **Scenario 2**: Users can expand an event to view details.
- **Scenario 3**: Users can collapse the event to hide details.

### Feature 3: Specify Number of Events
- **Scenario 1**: Show 32 events by default if the user doesn’t specify a number.
- **Scenario 2**: Users can change the number of events displayed.

### Feature 4: Use the App When Offline
- **Scenario 1**: Show cached data when there’s no internet connection.
- **Scenario 2**: Display an error if the user tries to change search settings while offline.

### Feature 5: Add App Shortcut to the Home Screen
- **Scenario 1**: Users can install the Meet app as a shortcut on their device’s home screen.

### Feature 6: Display Charts Visualizing Event Details
- **Scenario 1**: Show a chart with the number of upcoming events in each city.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Redux**: State management for handling complex data flows.
- **Recharts**: Library for rendering charts in React.
- **Jest & Puppeteer**: Tools for testing React components and running end-to-end tests.
- **Service Workers**: For caching data to enable offline functionality.

## Getting Started
1. Clone the repository:  
   `git clone https://github.com/alexandriax/meet.git`
   
2. Install dependencies:  
   `npm install`
   
3. Run the development server:  
   `npm start`
   
4. Deploy to GitHub Pages:  
   `npm run deploy`

