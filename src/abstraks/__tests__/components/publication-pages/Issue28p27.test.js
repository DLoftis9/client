import React from 'react';
import { shallow } from 'enzyme';
import Issue28p27 from '../../../components/publication-pages/Issue28p27';

describe('Issue28p27', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p27 />);
  });
});
