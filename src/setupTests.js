import '@testing-library/jest-dom/extend-expect';

window.HTMLElement.prototype.scrollIntoView = jest.fn();
