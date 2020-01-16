import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Header from '../../components/Header';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
