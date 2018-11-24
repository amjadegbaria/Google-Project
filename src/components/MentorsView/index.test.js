import React from 'react';
import { shallow } from 'enzyme';
import StudentsView from './';

it('Test example', () => {
  const wrapper = shallow(<StudentsView />);
  expect(wrapper.is('ul')).toBeTruthy();
});
