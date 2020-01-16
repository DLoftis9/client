import React from 'react';
import { shallow } from 'enzyme';
import Issue26p43 from '../../../components/publication-pages/Issue26p43';

describe('Issue26p43', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p43 />);
  });
});
