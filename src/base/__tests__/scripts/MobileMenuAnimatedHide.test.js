import React from 'react';
import MobileMenuAnimatedHide from '../../scripts/MobileMenuAnimatedHide';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MobileMenuAnimatedHide', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuAnimatedHide />);
  });
});
