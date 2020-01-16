import React from 'react';
import { shallow } from 'enzyme';
import Issue26p29 from '../../../components/publication-pages/Issue26p29';

describe('Issue26p29', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p29 />);
  });
});
