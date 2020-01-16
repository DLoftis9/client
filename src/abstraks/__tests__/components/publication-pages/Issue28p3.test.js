import React from 'react';
import { shallow } from 'enzyme';
import Issue28p3 from '../../../components/publication-pages/Issue28p3';

describe('Issue28p3', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p3 />);
  });
});
