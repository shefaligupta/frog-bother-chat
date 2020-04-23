import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react';
import App from '../components/App';

it('should snapshot all the components', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should add chat history', () => {
  const {container} = render(<App/>);
  const textbox = container.querySelector('[type="text"]');
  fireEvent.change(textbox, {target: {value: 'this is a test message'}});
  fireEvent.click(container.querySelector('[type="button"]'));

  const chatHistory = container.querySelector('[class="chat-history"]');
  expect(chatHistory.children).toHaveLength(1);
});
