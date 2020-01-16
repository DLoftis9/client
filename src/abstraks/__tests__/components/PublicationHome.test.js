import React from 'react';
import { shallow } from 'enzyme';
import PublicationHome from '../../components/PublicationHome';

describe('PublicationHome', () => {
  it('renders without crashing', () => {
    shallow(<PublicationHome />);
  });
});
