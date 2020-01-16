import React from 'react';
import { shallow } from 'enzyme';
import Issue26p15 from '../../../components/publication-pages/Issue26p15';

describe('Issue26p15', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p15 />);
  });
});
