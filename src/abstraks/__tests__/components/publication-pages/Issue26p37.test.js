import React from 'react';
import { shallow } from 'enzyme';
import Issue26p37 from '../../../components/publication-pages/Issue26p37';

describe('Issue26p37', () => {
  it('renders without crashing', () => {
    shallow(<Issue26p37 />);
  });
});
