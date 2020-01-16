import React from 'react';
import { shallow } from 'enzyme';
import Issue28p23 from '../../../components/publication-pages/Issue28p23';

describe('Issue28p23', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p23 />);
  });
});
