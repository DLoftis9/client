import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Contact from '../../containers/Contact';

describe('Contact', () => {
  it('renders without crashing', () => {
    shallow(<Contact />);
  });
});
