import React from 'react';
import { shallow } from 'enzyme';
import Issue26p34 from '../../../components/publication-pages/Issue26p34';

describe('Issue26p34', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p34 />);
  });
});
