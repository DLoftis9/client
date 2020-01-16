import React from 'react';
import { shallow } from 'enzyme';
import Issue28p1 from '../../../components/publication-pages/Issue28p1';

describe('Issue28p1', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p1 />);
  });
});
