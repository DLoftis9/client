import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Home from '../../containers/Home';

describe('Home', () => {
  it('renders without crashing', () => {
    shallow(<Home />);
  });
});
