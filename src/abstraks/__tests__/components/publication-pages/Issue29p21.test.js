import React from 'react';
import { shallow } from 'enzyme';
import Issue29p21 from '../../../components/publication-pages/Issue29p21';

describe('Issue29p21', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p21 />);
  });
});
