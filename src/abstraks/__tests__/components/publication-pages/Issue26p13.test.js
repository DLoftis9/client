import React from 'react';
import { shallow } from 'enzyme';
import Issue26p13 from '../../../components/publication-pages/Issue26p13';

describe('Issue26p13', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p13 />);
  });
});
