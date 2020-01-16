import React from 'react';
import { shallow } from 'enzyme';
import Issue28p13 from '../../../components/publication-pages/Issue28p13';

describe('Issue28p13', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p13 />);
  });
});
