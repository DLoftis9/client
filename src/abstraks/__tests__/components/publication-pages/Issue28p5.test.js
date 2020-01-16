import React from 'react';
import { shallow } from 'enzyme';
import Issue28p5 from '../../../components/publication-pages/Issue28p5';

describe('Issue28p5', () => {
  it('renders without crashing', () => {
    shallow(<Issue28p5 />);
  });
});
