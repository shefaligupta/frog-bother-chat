import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import ChatHistory from '../components/ChatHistory';


it('should render Henchmen list', () => {
  const tree = renderer.create(<ChatHistory/>).toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render the message', () => {
  const chatHistory = [{
    message: 'This is a test message',
    timePeriod: 'Thu, 23 Apr 2020 01:36:37 GMT',
  }];

  const {container} = render(<ChatHistory {...chatHistory} />);
  const chatDiv = container.querySelector('[class="chat-history"]');
  expect(chatDiv.children).toHaveLength(1);
});
