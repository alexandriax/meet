import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import NumberOfEvents from '../components/NumberOfEvents';

const feature = loadFeature('./src/features/specifyNumEvents.feature');

defineFeature(feature, test => {
    test('When user hasn\'t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let NumberOfEventsComponent;
        let numberOfEventsTextbox;

        given('the user is on the main page', () => {
            NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={jest.fn()} />);
            numberOfEventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        });

        when('the event list is displayed', () => {
            expect(numberOfEventsTextbox).toBeInTheDocument();

        });

        then(/^the default number of displayed events should be (\d+)$/, (arg0) => {
            expect(numberOfEventsTextbox).toHaveValue(arg0.toString());
        });
    });


    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let NumberOfEventsComponent;
        let numberOfEventsTextbox;

        given('the user is on the main page', () => {
            const setCurrentNOE = jest.fn();
            NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} />);
            numberOfEventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
        });

        when('the user specifies a number of events to display', async () => {
            await userEvent.type(numberOfEventsTextbox, '{backspace}{backspace}10');
        });

        then('the event list should update to show the specified number of events', () => {
            expect(numberOfEventsTextbox).toHaveValue('10');
        });
    });

});