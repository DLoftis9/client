import React from 'react';
import { shallow } from 'enzyme';
import Issue26p36 from '../../../components/publication-pages/Issue26p36';

describe('Issue26p36', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p36 />);
  });
});
