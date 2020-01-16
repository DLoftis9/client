import React from 'react';
import { shallow } from 'enzyme';
import Issue28p25 from '../../../components/publication-pages/Issue28p25';

describe('Issue28p25', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p25 />);
  });
});
