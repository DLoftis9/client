import React from 'react';
import { shallow } from 'enzyme';
import Issue26p21 from '../../../components/publication-pages/Issue26p21';

describe('Issue26p21', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p21 />);
  });
});
