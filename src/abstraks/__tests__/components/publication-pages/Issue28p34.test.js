import React from 'react';
import { shallow } from 'enzyme';
import Issue28p34 from '../../../components/publication-pages/Issue28p34';

describe('Issue28p34', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p34 />);
  });
});
