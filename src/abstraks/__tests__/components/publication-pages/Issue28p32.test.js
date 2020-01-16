import React from 'react';
import { shallow } from 'enzyme';
import Issue28p32 from '../../../components/publication-pages/Issue28p32';

describe('Issue28p32', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p32 />);
  });
});
