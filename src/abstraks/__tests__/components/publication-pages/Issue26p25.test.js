import React from 'react';
import { shallow } from 'enzyme';
import Issue26p25 from '../../../components/publication-pages/Issue26p25';

describe('Issue26p25', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p25 />);
  });
});
