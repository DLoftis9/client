import React from 'react';
import { shallow } from 'enzyme';
import Issue29p7 from '../../../components/publication-pages/Issue29p7';

describe('Issue29p7', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p7 />);
  });
});
