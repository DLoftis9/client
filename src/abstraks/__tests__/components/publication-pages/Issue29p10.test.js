import React from 'react';
import { shallow } from 'enzyme';
import Issue29p10 from '../../../components/publication-pages/Issue29p10';

describe('Issue29p10', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p10 />);
  });
});
