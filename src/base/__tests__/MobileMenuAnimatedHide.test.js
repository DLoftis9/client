import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import MobileMenuAnimatedHide from '../scripts/MobileMenuAnimatedHide';

describe('MobileMenuAnimatedHide', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuAnimatedHide />);
  });
});
