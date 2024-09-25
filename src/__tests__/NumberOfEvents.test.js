import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
    let NumberOfEventsComponent;
    let numberOfEventsTextbox;
    beforeEach(() => {
        const setCurrentNOE = jest.fn();
        NumberOfEventsComponent = render(<NumberOfEvents currentNOE={32} setCurrentNOE={setCurrentNOE} />);
        numberOfEventsTextbox = NumberOfEventsComponent.queryByRole('textbox');
    });


    test('renders textbox', () => {
        expect(numberOfEventsTextbox).toBeInTheDocument();
    })

    test('default value of input field is 32', () => {
        expect(numberOfEventsTextbox).toHaveValue("32");
    })

    test('value of input changes when the user types in it', async () => {
        await userEvent.type(numberOfEventsTextbox, '{backspace}{backspace}10');
        expect(numberOfEventsTextbox).toHaveValue('10')
    })
})