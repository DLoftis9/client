import React from 'react';
import { shallow } from 'enzyme';
import Issue26p11 from '../../../components/publication-pages/Issue26p11';

describe('Issue26p11', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p11 />);
  });
});
