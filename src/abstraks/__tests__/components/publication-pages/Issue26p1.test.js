import React from 'react';
import { shallow } from 'enzyme';
import Issue26p1 from '../../../components/publication-pages/Issue26p1';

describe('Issue26p1', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p1 />);
  });
});
