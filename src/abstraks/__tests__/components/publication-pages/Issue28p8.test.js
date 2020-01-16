import React from 'react';
import { shallow } from 'enzyme';
import Issue28p8 from '../../../components/publication-pages/Issue28p8';

describe('Issue28p8', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p8 />);
  });
});
