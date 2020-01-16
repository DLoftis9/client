import React from 'react';
import { shallow } from 'enzyme';
import Issue26p23 from '../../../components/publication-pages/Issue26p23';

describe('Issue26p23', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p23 />);
  });
});
