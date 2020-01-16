import React from 'react';
import { shallow } from 'enzyme';
import Issue26p6 from '../../../components/publication-pages/Issue26p6';

describe('Issue26p6', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p6 />);
  });
});
