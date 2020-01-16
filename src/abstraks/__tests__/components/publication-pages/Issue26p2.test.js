import React from 'react';
import { shallow } from 'enzyme';
import Issue26p2 from '../../../components/publication-pages/Issue26p2';

describe('Issue26p2', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p2 />);
  });
});
