import React from 'react';
import PortalContentHide from '../../scripts/PortalContentHide';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('PortalContentHide', () => {
  const portalContentHide = shallow(<PortalContentHide />);

  it('renders without crashing', () => {
    expect(portalContentHide);
  });
});
