import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Logo from '../../components/Logo';

describe('Logo', () => {
  it('renders without crashing', () => {
    shallow(<Logo />);
  });
});
