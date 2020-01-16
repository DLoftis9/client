import React from 'react';
import { shallow } from 'enzyme';
import Issue29p11 from '../../../components/publication-pages/Issue29p11';

describe('Issue29p11', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p11 />);
  });
});
