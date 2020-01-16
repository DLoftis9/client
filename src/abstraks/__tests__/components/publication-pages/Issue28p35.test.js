import React from 'react';
import { shallow } from 'enzyme';
import Issue28p35 from '../../../components/publication-pages/Issue28p35';

describe('Issue28p35', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p35 />);
  });
});
