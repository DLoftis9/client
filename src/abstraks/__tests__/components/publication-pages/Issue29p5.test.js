import React from 'react';
import { shallow } from 'enzyme';
import Issue29p5 from '../../../components/publication-pages/Issue29p5';

describe('Issue29p5', () => {
  it('renders without crashing', () => {
    shallow(<Issue29p5 />);
  });
});
