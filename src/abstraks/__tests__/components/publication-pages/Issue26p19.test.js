import React from 'react';
import { shallow } from 'enzyme';
import Issue26p19 from '../../../components/publication-pages/Issue26p19';

describe('Issue26p19', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p19 />);
  });
});
