import React from 'react';
import {render} from '@testing-library/react';
import renderer from 'react-test-renderer';
import HenchmenList from '../components/HenchmenList';

it('should snapshot henchmen list', () => {
  const tree = renderer.create(<HenchmenList/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should render Henchmen names button', () => {
  const {container} = render(<HenchmenList/>);
  const henchmanList = container.querySelector('[class="henchman"]');
  expect(henchmanList.children).toHaveLength(3);
});
