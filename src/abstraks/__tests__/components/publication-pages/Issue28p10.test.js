import React from 'react';
import { shallow } from 'enzyme';
import Issue28p10 from '../../../components/publication-pages/Issue28p10';

describe('Issue28p10', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p10 />);
  });
});
