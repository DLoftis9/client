import React from 'react';
import { shallow } from 'enzyme';
import Issue26p5 from '../../../components/publication-pages/Issue26p5';

describe('Issue26p5', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p5 />);
  });
});
