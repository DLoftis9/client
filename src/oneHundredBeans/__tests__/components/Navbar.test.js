import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Navbar from '../../components/Navbar';

describe('PublicationHome', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});
