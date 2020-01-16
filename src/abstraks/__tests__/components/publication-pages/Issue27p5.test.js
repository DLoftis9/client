import React from 'react';
import { shallow } from 'enzyme';
import Issue27p5 from '../../../components/publication-pages/Issue27p5';

describe('Issue27p5', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p5 />);
  });
});
