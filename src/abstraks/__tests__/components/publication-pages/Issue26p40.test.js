import React from 'react';
import { shallow } from 'enzyme';
import Issue26p40 from '../../../components/publication-pages/Issue26p40';

describe('Issue26p40', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p40 />);
  });
});
