import React from 'react';
import { shallow } from 'enzyme';
import Issue29p24 from '../../../components/publication-pages/Issue29p24';

describe('Issue29p24', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p24 />);
  });
});
