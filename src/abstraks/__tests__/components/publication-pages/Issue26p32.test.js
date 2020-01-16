import React from 'react';
import { shallow } from 'enzyme';
import Issue26p32 from '../../../components/publication-pages/Issue26p32';

describe('Issue26p32', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p32 />);
  });
});
