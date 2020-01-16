import React from 'react';
import { shallow } from 'enzyme';
import Issue26p12 from '../../../components/publication-pages/Issue26p12';

describe('Issue26p12', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p12 />);
  });
});
