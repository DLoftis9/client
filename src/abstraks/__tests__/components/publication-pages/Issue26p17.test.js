import React from 'react';
import { shallow } from 'enzyme';
import Issue26p17 from '../../../components/publication-pages/Issue26p17';

describe('Issue26p17', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p17 />);
  });
});
