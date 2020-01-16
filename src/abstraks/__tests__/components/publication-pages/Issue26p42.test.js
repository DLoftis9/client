import React from 'react';
import { shallow } from 'enzyme';
import Issue26p42 from '../../../components/publication-pages/Issue26p42';

describe('Issue26p42', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p42 />);
  });
});
