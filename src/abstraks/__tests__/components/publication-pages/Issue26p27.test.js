import React from 'react';
import { shallow } from 'enzyme';
import Issue26p27 from '../../../components/publication-pages/Issue26p27';

describe('Issue26p27', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p27 />);
  });
});
