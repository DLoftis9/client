import React from 'react';
import { shallow } from 'enzyme';
import Issue26p39 from '../../../components/publication-pages/Issue26p39';

describe('Issue26p39', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p39 />);
  });
});
