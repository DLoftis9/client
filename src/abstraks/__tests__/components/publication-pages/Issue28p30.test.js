import React from 'react';
import { shallow } from 'enzyme';
import Issue28p30 from '../../../components/publication-pages/Issue28p30';

describe('Issue28p30', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p30 />);
  });
});
