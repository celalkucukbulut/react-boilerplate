import React from 'react';
import {shallow} from 'enzyme';
import Loading from '../../components/Loading';

test('correctly render loading page', () => {
  const wrapper = shallow(<Loading />);
  expect(wrapper).toMatchSnapshot();
});