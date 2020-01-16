import React from 'react';
import { shallow } from 'enzyme';
import Issue26p28 from '../../../components/publication-pages/Issue26p28';

describe('Issue26p28', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p28 />);
  });
});
