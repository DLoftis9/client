import React from 'react';
import { shallow } from 'enzyme';
import Issue29p22 from '../../../components/publication-pages/Issue29p22';

describe('Issue29p22', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p22 />);
  });
});
