import React from 'react';
import { shallow } from 'enzyme';
import Issue29p9 from '../../../components/publication-pages/Issue29p9';

describe('Issue29p9', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p9 />);
  });
});
