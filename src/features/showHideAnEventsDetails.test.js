import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App.js'
import Event from '../components/Event.js';
import { getEvents } from '../api.js';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    let AppComponent;
    let AppDOM;
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        
        given('the user is on the main page', async () => {
          AppComponent = render(<App />); 
          AppDOM = AppComponent.container.firstChild;

        });

        when('the event list is displayed', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                expect(EventListDOM).toBeInTheDocument();

                const eventItems = within(EventListDOM).getAllByRole('listitem');
                expect(eventItems.length).toBeGreaterThan(0);
            });
        });

        then('the event details should be hidden by default', () => {
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).not.toBeInTheDocument();

        });
    });

    test('User can expand an event to see details.', ({ given, and, when, then }) => {
        given('the main page is open', async () => {
            AppComponent = render(<App />);
            AppDOM = AppComponent.container.firstChild;

        });

        and('the event list is displayed', async () => {
            const EventListDOM = AppDOM.querySelector('#event-list');

            await waitFor(() => {
                expect(EventListDOM).toBeInTheDocument();
                const eventItems = within(EventListDOM).getAllByRole('listitem');
                expect(eventItems.length).toBeGreaterThan(0);
            });

        });

        when('the user clicks on the “show details” button for an event', async () => {
            const showDetailsButton = AppDOM.querySelector('.details-btn');
            await userEvent.click(showDetailsButton);
        });

        then('the event details should be displayed', () => {
            const eventDetails = AppDOM.querySelector('.event-details');
            expect(eventDetails).toBeInTheDocument();
            expect(AppDOM.querySelector('.details-btn')).toHaveTextContent('hide details');

        });
    });

    test('User can collapse an event to hide details.', ({ given, when, then }) => {
        let EventComponent;
        let events;
        given('the user has expanded an event to see details', async () => {
            events = await getEvents();
            EventComponent = render(<Event event={events[0]} />)

            
            const showDetails = EventComponent.container.querySelector('.details-btn');
            await userEvent.click(showDetails);
            expect(EventComponent.container.querySelector('.event-details')).toBeInTheDocument();

        });

        when('the user clicks on the “hide details” button for that event', async () => {
            const hideDetailsButton = EventComponent.container.querySelector('.details-btn');
            await userEvent.click(hideDetailsButton);
        });

        then('the event details should be hidden again', async () => {
            await waitFor(() => {
              const eventDetails = EventComponent.container.querySelector('.event-details');
              expect(eventDetails).not.toBeInTheDocument();
              expect(EventComponent.container.querySelector('.details-btn')).toHaveTextContent('show details');
            });
            
        });
    });
});