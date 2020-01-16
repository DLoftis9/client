import React from 'react';
import { shallow } from 'enzyme';
import Issue26p41 from '../../../components/publication-pages/Issue26p41';

describe('Issue26p41', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p41 />);
  });
});
