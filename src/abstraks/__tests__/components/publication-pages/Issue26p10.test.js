import React from 'react';
import { shallow } from 'enzyme';
import Issue26p10 from '../../../components/publication-pages/Issue26p10';

describe('Issue26p10', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p10 />);
  });
});
