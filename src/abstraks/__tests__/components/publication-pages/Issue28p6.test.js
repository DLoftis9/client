import React from 'react';
import { shallow } from 'enzyme';
import Issue28p6 from '../../../components/publication-pages/Issue28p6';

describe('Issue28p6', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p6 />);
  });
});
