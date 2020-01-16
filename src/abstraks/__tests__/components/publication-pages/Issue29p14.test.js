import React from 'react';
import { shallow } from 'enzyme';
import Issue29p14 from '../../../components/publication-pages/Issue29p14';

describe('Issue29p14', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p14 />);
  });
});
