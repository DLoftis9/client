import React from 'react';
import { shallow } from 'enzyme';
import Issue29p13 from '../../../components/publication-pages/Issue29p13';

describe('Issue29p13', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p13 />);
  });
});
