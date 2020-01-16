import React from 'react';
import { shallow } from 'enzyme';
import Issue26p18 from '../../../components/publication-pages/Issue26p18';

describe('Issue26p18', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p18 />);
  });
});
