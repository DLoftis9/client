import React from 'react';
import { shallow } from 'enzyme';
import Issue26p24 from '../../../components/publication-pages/Issue26p24';

describe('Issue26p24', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p24 />);
  });
});
