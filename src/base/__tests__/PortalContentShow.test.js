import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import PortalContentShow from '../scripts/PortalContentShow';

describe('PortalContentShow', () => {
  it('renders without crashing', () => {
    shallow(<PortalContentShow />);
  });
});
