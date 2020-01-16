import React from 'react';
import { shallow } from 'enzyme';
import Issue29p18 from '../../../components/publication-pages/Issue29p18';

describe('Issue29p18', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p18 />);
  });
});
