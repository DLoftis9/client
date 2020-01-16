import React from 'react';
import { shallow } from 'enzyme';
import Issue29p2 from '../../../components/publication-pages/Issue29p2';

describe('Issue29p2', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p2 />);
  });
});
