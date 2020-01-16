import React from 'react';
import { shallow } from 'enzyme';
import Issue26p22 from '../../../components/publication-pages/Issue26p22';

describe('Issue26p22', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p22 />);
  });
});
