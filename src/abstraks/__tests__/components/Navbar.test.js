import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../components/Navbar';

describe('PublicationHome', () => {
  it('renders without crashing', () => {
    shallow(<Navbar />);
  });
});
