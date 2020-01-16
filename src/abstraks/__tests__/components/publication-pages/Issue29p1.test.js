import React from 'react';
import { shallow } from 'enzyme';
import Issue29p1 from '../../../components/publication-pages/Issue29p1';

describe('Issue29p1', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p1 />);
  });
});
