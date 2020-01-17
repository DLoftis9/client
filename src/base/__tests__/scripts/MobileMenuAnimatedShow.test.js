import React from 'react';
import MobileMenuAnimatedShow from '../../scripts/MobileMenuAnimatedShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MobileMenuAnimatedShow', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuAnimatedShow />);
  });
});
