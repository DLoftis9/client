import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import PortalOverlay from '../scripts/PortalOverlay';

describe('PortalOverlay', () => {
  it('renders without crashing', () => {
    shallow(<PortalOverlay />);
  });
});
