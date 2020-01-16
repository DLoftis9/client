import React from 'react';
import { shallow } from 'enzyme';
import Issue26p9 from '../../../components/publication-pages/Issue26p9';

describe('Issue26p9', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p9 />);
  });
});
