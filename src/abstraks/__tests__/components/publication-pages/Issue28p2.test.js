import React from 'react';
import { shallow } from 'enzyme';
import Issue28p2 from '../../../components/publication-pages/Issue28p2';

describe('Issue28p2', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p2 />);
  });
});
