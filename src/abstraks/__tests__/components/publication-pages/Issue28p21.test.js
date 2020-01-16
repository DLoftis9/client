import React from 'react';
import { shallow } from 'enzyme';
import Issue28p21 from '../../../components/publication-pages/Issue28p21';

describe('Issue28p21', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p21 />);
  });
});
