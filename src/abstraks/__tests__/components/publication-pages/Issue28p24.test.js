import React from 'react';
import { shallow } from 'enzyme';
import Issue28p24 from '../../../components/publication-pages/Issue28p24';

describe('Issue28p24', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p24 />);
  });
});
