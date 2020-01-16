import React from 'react';
import { shallow } from 'enzyme';
import Issue29p3 from '../../../components/publication-pages/Issue29p3';

describe('Issue29p3', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p3 />);
  });
});
