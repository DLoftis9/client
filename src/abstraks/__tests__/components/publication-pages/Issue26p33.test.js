import React from 'react';
import { shallow } from 'enzyme';
import Issue26p33 from '../../../components/publication-pages/Issue26p33';

describe('Issue26p33', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p33 />);
  });
});
