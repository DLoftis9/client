import React from 'react';
import { shallow } from 'enzyme';
import Issue26p38 from '../../../components/publication-pages/Issue26p38';

describe('Issue26p38', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p38 />);
  });
});
