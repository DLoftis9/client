import React from 'react';
import { shallow } from 'enzyme';
import Issue26p8 from '../../../components/publication-pages/Issue26p8';

describe('Issue26p8', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p8 />);
  });
});
