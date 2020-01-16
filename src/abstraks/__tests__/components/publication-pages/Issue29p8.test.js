import React from 'react';
import { shallow } from 'enzyme';
import Issue29p8 from '../../../components/publication-pages/Issue29p8';

describe('Issue29p8', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p8 />);
  });
});
