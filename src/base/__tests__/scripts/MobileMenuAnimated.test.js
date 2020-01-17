import React from 'react';
import MobileMenuAnimated from '../../scripts/MobileMenuAnimated';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('MobileMenuAnimated', () => {
  it('renders without crashing', () => {
    shallow(<MobileMenuAnimated />);
  });
});
