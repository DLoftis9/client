import React from 'react';
import { shallow } from 'enzyme';
import Social from '../../components/Social';

describe('Social', () => {
  it('renders without crashing', () => {
    shallow(<Social />);
  });
});
