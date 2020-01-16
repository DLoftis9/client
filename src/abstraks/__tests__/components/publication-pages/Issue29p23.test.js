import React from 'react';
import { shallow } from 'enzyme';
import Issue29p23 from '../../../components/publication-pages/Issue29p23';

describe('Issue29p23', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p23 />);
  });
});
