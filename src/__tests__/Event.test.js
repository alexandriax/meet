import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Event from '../components/Event';
import { getEvents } from '../api';

describe('<Event /> component', () => {
    let EventComponent;
    let event;

    beforeEach(async () => {
        const events = await getEvents();
        event = events[0];
        EventComponent = render(<Event event={event} />);

    });

    test('renders event title', () => {
        expect(EventComponent.queryByText(event.summary)).toBeInTheDocument();
    });

    test('renders event start time', () => {
        expect(EventComponent.queryByText(event.created)).toBeInTheDocument();
    });

    test('renders event location', () => {
        expect(EventComponent.queryByText(event.location)).toBeInTheDocument();
    });

    test('renders event details button with the title (show details)', () => {
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });

    test('by default, events details section should be hidden & show details button shown', () => {
        const { container } = EventComponent;
        const eventDetails = container.querySelector('.event-details');
        expect(eventDetails).not.toBeInTheDocument();
    });

    test('shows the details section when the user clicks show details button', async () => {
        const user = userEvent.setup();
        const showDetailsButton = EventComponent.queryByText('show details');

        await user.click(showDetailsButton);

        const eventDetails = EventComponent.queryByTestId('event-details')

        expect(eventDetails).toBeInTheDocument();
        expect(EventComponent.queryByText('show details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).toBeInTheDocument();
    });

    test('hides details section when user clicks hide details button', async () => {
        const user = userEvent.setup();

        const showDetailsButton = EventComponent.queryByText('show details');
        await user.click(showDetailsButton);

        const hideDetailsButton = EventComponent.queryByText('hide details');
        await user.click(hideDetailsButton);

        const eventDetails = EventComponent.queryByTestId('event-details');
        expect(eventDetails).not.toBeInTheDocument();
        expect(EventComponent.queryByText('hide details')).not.toBeInTheDocument();
        expect(EventComponent.queryByText('show details')).toBeInTheDocument();
    });


});



