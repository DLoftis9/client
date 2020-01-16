import React from 'react';
import { shallow } from 'enzyme';
import Issue29p15 from '../../../components/publication-pages/Issue29p15';

describe('Issue29p15', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p15 />);
  });
});
