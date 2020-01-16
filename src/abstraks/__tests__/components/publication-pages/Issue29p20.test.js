import React from 'react';
import { shallow } from 'enzyme';
import Issue29p20 from '../../../components/publication-pages/Issue29p20';

describe('Issue29p20', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p20 />);
  });
});
