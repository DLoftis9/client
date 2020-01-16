import React from 'react';
import { shallow } from 'enzyme';
import Issue26p3 from '../../../components/publication-pages/Issue26p3';

describe('Issue26p3', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p3 />);
  });
});
