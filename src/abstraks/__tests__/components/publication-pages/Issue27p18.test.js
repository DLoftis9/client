import React from 'react';
import { shallow } from 'enzyme';
import Issue27p18 from '../../../components/publication-pages/Issue27p18';

describe('Issue27p18', () => {
  it('renders without crashing', () => {
    shallow(<Issue27p18 />);
  });
});
