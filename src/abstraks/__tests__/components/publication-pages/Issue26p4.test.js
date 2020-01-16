import React from 'react';
import { shallow } from 'enzyme';
import Issue26p4 from '../../../components/publication-pages/Issue26p4';

describe('Issue26p4', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p4 />);
  });
});
