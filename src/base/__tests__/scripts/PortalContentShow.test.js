import React from 'react';
import PortalContentShow from '../../scripts/PortalContentShow';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('PortalContentShow', () => {
  it('renders without crashing', () => {
    shallow(<PortalContentShow />);
  });
});
