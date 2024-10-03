// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const MESSAGES_TO_IGNORE = [
    "When testing, code that causes React state updates should be wrapped into >act(...):",
"Error:",
"The above error occurred"
];
jest.setTimeout(30000);