import React from 'react';
import { shallow } from 'enzyme';
import Issue28p18 from '../../../components/publication-pages/Issue28p18';

describe('Issue28p18', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p18 />);
  });
});
