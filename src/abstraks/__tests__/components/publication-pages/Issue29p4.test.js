import React from 'react';
import { shallow } from 'enzyme';
import Issue29p4 from '../../../components/publication-pages/Issue29p4';

describe('Issue29p4', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p4 />);
  });
});
