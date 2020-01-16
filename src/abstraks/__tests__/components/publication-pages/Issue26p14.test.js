import React from 'react';
import { shallow } from 'enzyme';
import Issue26p14 from '../../../components/publication-pages/Issue26p14';

describe('Issue26p14', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p14 />);
  });
});
