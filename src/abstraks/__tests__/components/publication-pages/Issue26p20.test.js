import React from 'react';
import { shallow } from 'enzyme';
import Issue26p20 from '../../../components/publication-pages/Issue26p20';

describe('Issue26p20', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p20 />);
  });
});
