import React from 'react';
import { shallow } from 'enzyme';
import Issue29p6 from '../../../components/publication-pages/Issue29p6';

describe('Issue29p6', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p6 />);
  });
});
