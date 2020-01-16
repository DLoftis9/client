import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import Footer from '../../components/Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });
});
