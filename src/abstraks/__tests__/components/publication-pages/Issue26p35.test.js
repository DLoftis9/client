import React from 'react';
import { shallow } from 'enzyme';
import Issue26p35 from '../../../components/publication-pages/Issue26p35';

describe('Issue26p35', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p35 />);
  });
});
