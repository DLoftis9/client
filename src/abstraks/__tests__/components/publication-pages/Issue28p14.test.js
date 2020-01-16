import React from 'react';
import { shallow } from 'enzyme';
import Issue28p14 from '../../../components/publication-pages/Issue28p14';

describe('Issue28p14', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p14 />);
  });
});
