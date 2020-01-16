import React from 'react';
import { shallow } from 'enzyme';
import Issue28p4 from '../../../components/publication-pages/Issue28p4';

describe('Issue28p4', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p4 />);
  });
});
