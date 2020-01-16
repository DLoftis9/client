import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import PortalContentHide from '../scripts/PortalContentHide';

describe('PortalContentHide', () => {
  const portalContentHide = shallow(<PortalContentHide />);

  it('renders without crashing', () => {
    expect(portalContentHide);
  });
});
