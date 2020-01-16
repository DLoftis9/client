import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import About from '../../containers/About';

describe('About', () => {
  it('renders without crashing', () => {
    shallow(<About />);
  });
});
