import React from 'react';
import { shallow } from 'enzyme';
import Issue29p12 from '../../../components/publication-pages/Issue29p12';

describe('Issue29p12', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p12 />);
  });
});
