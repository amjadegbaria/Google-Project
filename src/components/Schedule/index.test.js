import React from 'react';
import { shallow } from 'enzyme';
import Schedule from './';

it('Test example', () => {
  const wrapper = shallow(<Schedule />);
  expect(wrapper.is('section')).toBeTruthy();
});
