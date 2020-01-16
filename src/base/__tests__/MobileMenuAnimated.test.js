import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import MobileMenuAnimated from '../scripts/MobileMenuAnimated';

describe('MobileMenuAnimated', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuAnimated />);
  });
});
