import React from 'react';
import { shallow } from 'enzyme';
import Issue26p44 from '../../../components/publication-pages/Issue26p44';

describe('Issue26p44', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p44 />);
  });
});
