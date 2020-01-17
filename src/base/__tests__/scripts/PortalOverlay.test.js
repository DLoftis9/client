import React from 'react';
import PortalOverlay from '../../scripts/PortalOverlay';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('PortalOverlay', () => {
  it('renders without crashing', () => {
    shallow(<PortalOverlay />);
  });
});
