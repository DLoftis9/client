import React from 'react';
import { shallow } from 'enzyme';
import Issue26p7 from '../../../components/publication-pages/Issue26p7';

describe('Issue26p7', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p7 />);
  });
});
